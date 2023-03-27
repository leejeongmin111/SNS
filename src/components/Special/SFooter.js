import "../../styles/Special/SFooter.scss";
// 흰색 아이콘

import dmOff from "../../images/footer_icon/message_off.png";
import noticeOff from "../../images/footer_icon/bell_off.png";
import homeOff from "../../images/footer_icon/home_off.png";
import userOff from "../../images/footer_icon/user_off.png";
import * as React from "react";
import Write_Special from "../Account_Setting/Write_Job_Special";
import { useNavigate } from "react-router-dom";

// 눌렀을 때 변경 될 아이콘
// import dmOn from "../../images/footer_icon/message_on.png";
// import noticeOn from "../../images/footer_icon/bell_on.png";
// import posteOn from "../../images/footer_icon/write_on.png";
// import homeOn from "../../images/footer_icon/home_on.png";
// import userOn from "../../images/footer_icon/user_on.png";

function Footer() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function home_click() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const nav = useNavigate();

  return (
    <div className="footer_container">
      <div className="menu">
        {/* <img className="icon" src={dmOff} alt="dm" /> */}
        <img className="icon" src={noticeOff} alt="message" id="icon_notice_special" />
        <img id="icon_home_special" className="icon" src={homeOff} alt="home" onClick={home_click} />
        <Write_Special></Write_Special>
        <img
          id="icon_my_special"
          className="icon"
          src={userOff}
          alt="mypage"
          onClick={() => {
            nav("/mypage");
          }}
        />
      </div>
    </div>
  );
}

export default Footer;
