import "../../styles/JobSns/JobFooter.scss";
// 흰색 아이콘

import dmOff from "../../images/footer_icon/message_off.png";
import noticeOff from "../../images/footer_icon/bell_off.png";
import homeOff from "../../images/footer_icon/home_off.png";
import userOff from "../../images/footer_icon/user_off.png";
import * as React from "react";
import Write_Job_Sns from "../Account_Setting/Write_Job_Sns";
import { useNavigate } from "react-router-dom";

// 눌렀을 때 변경 될 아이콘
// import dmOn from "../../images/footer_icon/message_on.png";
// import noticeOn from "../../images/footer_icon/bell_on.png";
// import posteOn from "../../images/footer_icon/write_on.png";
// import homeOn from "../../images/footer_icon/home_on.png";
// import userOn from "../../images/footer_icon/user_on.png";

function Footer() {
  const nav = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // 맨 위 페이지 올라가기
  function home_click() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="footer_container">
      <div className="menu">
        {/* <img className="icon" src={dmOff} alt="dm" /> */}
        <img className="icon" src={noticeOff} alt="message"  id="icon_notice"/>
        <img className="icon"  src={homeOff} alt="home" onClick={home_click} id="icon_home" />
        <Write_Job_Sns id ="icon_write_job"></Write_Job_Sns>
        <img
          className="icon"
          src={userOff}
          alt="mypage"
          onClick={() => {
            nav("/mypage");
          }}
          id="icon_my"
        />
      </div>
    </div>
  );
}

export default Footer;
