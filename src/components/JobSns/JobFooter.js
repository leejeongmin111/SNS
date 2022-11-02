import "../../styles/JobSns/JobFooter.scss";
// 흰색 아이콘
import dmOff from "../../images/message_off.png";
import noticeOff from "../../images/bell_off.png";
import homeOff from "../../images/home_off.png";
import postOff from "../../images/write_off.png";
import userOff from "../../images/user_off.png";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import Button from '@mui/material/Button';
import Write_Daily from "../Account/Write_Daily";
import Write_Job_Sns from "../Account/Write_Job_Sns";
import Write_Special from "../Account/Write_Job_Special";

// 눌렀을 때 변경 될 아이콘
// import dmOn from "../../images/message_on.png";
// import noticeOn from "../../images/bell_on.png";
// import posteOn from "../../images/write_on.png";
// import homeOn from "../../images/home_on.png";
// import userOn from "../../images/user_on.png";

function Footer() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className="footer_container">
      <div className="menu">
        <img className="icon" src={dmOff} alt="dm" />
        <img className="icon" src={noticeOff} alt="message" />
        <img className="icon" src={homeOff} alt="home" />

        {/* 글쓰기 클릭 시 글 쓰기 작성 칸 */}
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
          <img className="icon" src={postOff} alt="post" />
        </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        >
        <MenuItem><Write_Daily/></MenuItem>
        <MenuItem><Write_Job_Sns/></MenuItem>
        <MenuItem><Write_Special/></MenuItem>
        </Menu>



        <img className="icon" src={userOff} alt="mypage" />
      </div>
    </div>
  );
}

export default Footer;
