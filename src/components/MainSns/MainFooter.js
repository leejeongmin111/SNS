import "../../styles/MainSns/MainFooter.scss";
// 흰색 아이콘

import dmOff from "../../images/footer_icon/message_off.png";
import noticeOff from "../../images/footer_icon/bell_off.png";
import homeOff from "../../images/footer_icon/home_off.png";
import postOff from "../../images/footer_icon/write_off.png";
import userOff from "../../images/footer_icon/user_off.png";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Notice from "../Notice";
import { useState } from "react";

import * as React from "react";
import Write_Daily from "../Account_Setting/Write_Daily";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";
// 눌렀을 때 변경 될 아이콘
// import dmOn from "../../images/footer_icon/message_on.png";
import noticeOn from "../../images/footer_icon/bell_on.png";
// import posteOn from "../../images/footer_icon/write_on.png";
// import homeOn from "../../images/footer_icon/home_on.png";
// import userOn from "../../images/footer_icon/user_on.png";

// 모달 크기 설정
const style = {
  position: "absolute",
  top: "70%",
  left: "45%",
  transform: "translate(-50%, -50%)",
  width: 100,
  height: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Footer() {
  const nav = useNavigate();

  // 맨 위 페이지로 올라가기
  function home_click() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const [notice_icon, setNotice_icon] = useState(noticeOff);

  const [anchorEl_notice, setAnchorEl_notice] = React.useState(null);
  const handleClick_notice = (event) => {
    setNotice_icon(noticeOn);
    setAnchorEl_notice(event.currentTarget);
  };
  const handleClose_notice = () => {
    setNotice_icon(noticeOff);
    setAnchorEl_notice(null);
  };
  const open_notice = Boolean(anchorEl_notice);
  const id = open_notice ? "simple-popover" : undefined;

  return (
    <>
      <div className="footer_container">
        <div className="menu">
          <img
            id="icon_notice_main"
            className="icon"
            src={notice_icon}
            alt="message"
            onClick={handleClick_notice}
            sx={{ color: blue }}
          />
          <img
            id="icon_home_main"
            className="icon"
            src={homeOff}
            alt="home"
            onClick={home_click}
          />
          <Write_Daily className="icon_daily"></Write_Daily>
          {/* <img className="icon" src={postOff} alt="post" /> */}
          <img
            id="icon_my_main"
            className="icon"
            src={userOff}
            alt="mypage"
            onClick={() => {
              nav("/mypage");
            }}
          />
        </div>

        <Popover
          id={id}
          open={open_notice}
          anchorEl={anchorEl_notice}
          onClose={handleClose_notice}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 900, left: 1600 }}
        >
          <Notice></Notice>
        </Popover>
      </div>
    </>
  );
}

export default Footer;
