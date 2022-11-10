import "../../styles/MyPage/MyProfilemy.scss";
import ProfileIcon from "../MyPage/MyProfileIcon";
import users from "../../data/users";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Myfollow_Click from "./Myfollow_Click";
import { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SetIcon from "../../images/setting.png";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import basic from "../../images/basicprofile.jpg";
import Myfollowing_Click from "./Myfollowing_Click";

function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [email] = useState(sessionStorage.getItem("email"));
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const DeletePr = () => {
    axios
      .post("http://127.0.0.1:3001/deleteProfile", {
        id: email,
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logout = () => {
    window.location.href = "/";
  };
  const nav = useNavigate();

  return (
    <div className="set_container">
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img className="SetIcon" src={SetIcon} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={DeletePr}>회원 탈퇴</MenuItem>
        <MenuItem
          onClick={() => {
            nav("/change");
          }}
        >
          회원 수정
        </MenuItem>
        <MenuItem
          onClick={() => {
            nav("/jobsetting");
          }}
        >
          직업 인증
        </MenuItem>
        <MenuItem onClick={logout}>로그 아웃</MenuItem>
      </Menu>
    </div>
  );
}

// 모달 스타일 설정
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Profilemy(props) {
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideAccountName,
    image,
    followImg,
    followId,
  } = props;

  let accountName = username
    ? username
    : users[Math.floor(Math.random() * users.length)].username;

  const [cntPost, setCnt] = useState("");
  const [myprofile, setMyprofile] = useState([]);
  const [followCnt, setFollowCnt] = useState();
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/mypagecnt", {
        email: email,
      })
      .then((res) => {
        console.log("mypagecnt들 결과값 : ", res.data.followingCnt[0].cnt);
        setCnt(res.data.cnt[0].cnt);
        setMyprofile(res.data.myInfo.data);
        setFollowCnt(res.data.followCnt);
        setFollowing(res.data.followingCnt[0].cnt);
      })
      .catch((err) => {
        console.log("mypagecnt끝내기 실패", err);
      });
  }, []);

  let profileDt;
  if (myprofile === null) {
    profileDt = basic;
  } else {
    window.Buffer = window.Buffer || require("buffer").Buffer;
    let encode = window.Buffer.from(myprofile).toString("base64");
    profileDt = "data:image/png;base64," + encode;
  }

  // 모달 설정
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  // 팔로우 팔로잉창 설정
  const [follow_open, setFollow_open] = useState();
  let temp;
  function Open_follow() {
    temp = 1;
    setFollow_open(<Myfollow_Click></Myfollow_Click>);
    setOpen(true);
  }
  function Open_following() {
    temp = 0;
    setFollow_open(<Myfollowing_Click></Myfollowing_Click>);
    setOpen(true);
  }

  const [email] = useState(sessionStorage.getItem("email"));

  return (
    <>
      <div className="My_profile">
        <div className="My_img">
          <ProfileIcon
            iconSize={iconSize}
            storyBorder={storyBorder}
            image={profileDt}
          />
        </div>
        {(accountName || caption) && !hideAccountName && (
          <div className="My_textContainer">
            <span className="My_accountName">{email}</span>
            <Box className="My_box">
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <span>게시물 &nbsp;&nbsp; {cntPost}</span>
                </Grid>
                <Grid item xs={3}>
                  <span onClick={Open_follow}>
                    팔로우 &nbsp;&nbsp;{followCnt}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <span onClick={Open_following}>
                    팔로잉 &nbsp;&nbsp;{following}
                  </span>
                </Grid>
                <PositionedMenu />
              </Grid>
            </Box>
            <span className={`caption ${captionSize}`}>{caption}</span>
          </div>
        )}
        <a href="/">{urlText}</a>
      </div>

      {/* 모달 : 팔로우 팔로잉 창 */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>{follow_open}</Box>
        </Modal>
      </div>
    </>
  );
}

export default Profilemy;
