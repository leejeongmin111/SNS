import "../../styles/Jobsns/footer.scss";
import notice from "../../images/notice.png";
import message from "../../images/message.png";
import home from "../../images/home.png";
import write from "../../images/write.png";
import mypage from "../../images/mypage.png";

function Footer() {
  return (
    <div className="footer_navigation">
      <div className="footer_container">
        <div className="menu">
          <img className="icon" src={notice} alt="notice" />
          <img className="icon" src={message} alt="message" />
          <img className="icon" src={home} alt="home" />
          <img className="icon" src={write} alt="write" />
          <img className="icon" src={mypage} alt="mypage" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
