import "../../styles/MyPage/MyProfilemy.scss";
import ProfileIcon from "../MyPage/MyProfileIcon";
import users from "../../data/users";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Setting from "../../Icons/Setting";

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
            <span className="My_accountName">{accountName}</span>
            <Box className="My_box">
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <span>게시물 &nbsp;&nbsp; 0</span>
                </Grid>
                <Grid item xs={3}>
                  <span>팔로우 &nbsp;&nbsp; 0</span>
                </Grid>
                <Grid item xs={3}>
                  <span>팔로잉 &nbsp;&nbsp; 0</span>
                </Grid>
              </Grid>
            </Box>
            <span className={`caption ${captionSize}`}>{caption}</span>
          </div>
        )}
        <a href="/">{urlText}</a>
      </div>
    </>
  );
}

export default Profilemy;
