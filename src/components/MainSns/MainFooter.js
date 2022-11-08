import "../../styles/MainSns/MainFooter.scss";
// 흰색 아이콘

import dmOff from "../../images/footer_icon/message_off.png";
import noticeOff from "../../images/footer_icon/bell_off.png";
import homeOff from "../../images/footer_icon/home_off.png";
import postOff from "../../images/footer_icon/write_off.png";
import userOff from "../../images/footer_icon/user_off.png";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Notice from "../Notice";

import * as React from "react";
import Write_Daily from "../Account_Setting/Write_Daily";
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
 

  // 맨 위 페이지로 올라가기
  function home_click() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  // 모달 크기 설정
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height:700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
    <div className="footer_container">
      <div className="menu">
        <img className="icon" src={dmOff} alt="dm"  />
        <img className="icon" src={noticeOff} alt="message" onClick={handleOpen}/>
        <img className="icon" src={homeOff} alt="home" onClick={home_click} />
        <Write_Daily className="icon_daily"></Write_Daily>
        {/* <img className="icon" src={postOff} alt="post" /> */}
        <img
          className="icon"
          src={userOff}
          alt="mypage"
          onClick={() => {
            nav("/mypage");
          }}
        />
      </div>
    </div>

          {/* 모달창  */}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Notice></Notice>
            </Box>
          </Modal>

    </>
  );
}

export default Footer;
