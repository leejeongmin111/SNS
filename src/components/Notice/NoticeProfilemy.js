import "../../styles/Notice/NoticeProfilemy.scss";
import ProfileIcon from "../Notice/NoticeProfileIcon";
import users from "../../data/users";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Myfollow_Click from "./Myfollow_Click";
import { useState } from "react";

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

  // 모달 설정
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [emailTest] = useState(sessionStorage.getItem("email"));

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
            <span className="My_accountName">{emailTest}</span>
            <Box className="My_box">
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <span>게시물 &nbsp;&nbsp; 0</span>
                </Grid>
                <Grid item xs={3}>
                  <span onClick={handleOpen}>팔로우 &nbsp;&nbsp; 0</span>
                </Grid>
                <Grid item xs={3}>
                  <span onClick={handleOpen}>팔로잉 &nbsp;&nbsp; 0</span>
                </Grid>
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
