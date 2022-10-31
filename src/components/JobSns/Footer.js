import "../../styles/Jobsns/footer.scss";
import notice from "../../images/notice.png";
import message from "../../images/message.png";
import home from "../../images/home.png";
import write from "../../images/write.png";
import mypage from "../../images/mypage.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import Write_Job_Special from "../Account/Write_Job_Special";
import Write_Daily from "../Account/Write_Daily";
import Write_Job_Sns from "../Account/Write_Job_Sns";

function Footer() {
  const scrollToTop = () => {
    // 페이지 위로 올라가게하는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log("TO TOP!");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="footer_navigation">
      <div className="footer_container">
        <div className="menu">
          <img className="icon" src={notice} alt="notice" />
          <img className="icon" src={message} alt="message" />
          <img className="icon" src={home} alt="home" onClick={scrollToTop} />

          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <img className="icon" src={write} alt="write" />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>
                <Write_Daily></Write_Daily>
              </MenuItem>
              <MenuItem>
                <Write_Job_Sns></Write_Job_Sns>
              </MenuItem>
              <MenuItem>
                <Write_Job_Special></Write_Job_Special>
              </MenuItem>
            </Menu>
          </div>

          <img className="icon" src={mypage} alt="mypage" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
