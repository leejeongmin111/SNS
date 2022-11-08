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

function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>회원 탈퇴</MenuItem>
        <MenuItem onClick={()=>{nav('/change')}}>회원 수정</MenuItem>
        <MenuItem onClick={handleClose}>직업 인증</MenuItem>
        <MenuItem onClick={handleClose}>로그 아웃</MenuItem>
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
  } = props;

  let accountName = username
    ? username
    : users[Math.floor(Math.random() * users.length)].username;

  const [cntPost, setCnt] = useState("");
  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/mypagecnt", {
        email: email,
      })
      .then((res) => {
        console.log("mypagecnt시작", res.data.cnt[0].cnt);
        setCnt(res.data.cnt[0].cnt);
      })
      .catch((err) => {
        console.log("mypagecnt끝내기 실패", err);
      });
  }, []);

  // 모달 설정
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [email] = useState(sessionStorage.getItem("email"));

  return (
    <>
      <div className="My_profile">
        <div className="My_img">
          <ProfileIcon
            iconSize={iconSize}
            storyBorder={storyBorder}
            image={image}
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
                  <span onClick={handleOpen}>팔로우 &nbsp;&nbsp;0</span>
                </Grid>
                <Grid item xs={3}>
                  <span onClick={handleOpen}>팔로잉 &nbsp;&nbsp; 0</span>
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
          <Box sx={style}>
            <Myfollow_Click></Myfollow_Click>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Profilemy;
