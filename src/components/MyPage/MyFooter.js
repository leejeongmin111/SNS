import "../../styles/MyPage/MyFooter.scss";
// 흰색 아이콘
import dmOff from "../../images/message_off.png";
import noticeOff from "../../images/bell_off.png";
import homeOff from "../../images/home_off.png";
import postOff from "../../images/write_off.png";
import userOff from "../../images/user_off.png";

// 눌렀을 때 변경 될 아이콘
// import dmOn from "../../images/message_on.png";
// import noticeOn from "../../images/bell_on.png";
// import posteOn from "../../images/write_on.png";
// import homeOn from "../../images/home_on.png";
// import userOn from "../../images/user_on.png";

function Footer() {
  return (
    <div className="footer_container">
      <div className="menu">
        <img className="icon" src={dmOff} alt="dm" />
        <img className="icon" src={noticeOff} alt="message" />
        <img className="icon" src={homeOff} alt="home" />
        <img className="icon" src={postOff} alt="post" />
        <img className="icon" src={userOff} alt="mypage" />
      </div>
    </div>
  );
}

export default Footer;
