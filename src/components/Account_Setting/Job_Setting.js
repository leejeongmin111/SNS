// import * as React from "react";

import logo from "../../images/jobsnsLogo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/Account/Register.scss";
import "../../styles/Account/Account_Change.scss";
import Profile_Photo from "@mui/icons-material/AddPhotoAlternate";
import IconButton from "@mui/material/IconButton";

export default function JobSetting() {
  const [email, setEmail] = useState(""); //아이디
  const [pw, setPw] = useState(""); // 비번
  const [nick, setNick] = useState(""); // 닉네임
  const [imgSrc, setimgSrc] = useState(""); // 이미지
  const nav = useNavigate();
  const srcChange = (e) => {
    setimgSrc(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
  };

  return (
    <div className="ch_main_box">
      <div className="Flex">
        <div class="flex_container">
          <form
            action="http://127.0.0.1:3001/check"
            method="post"
            encType="multipart/form-data"
          >
            <div class="sign_container">
              <img className="logo" src={logo} alt="Jobsns logo" />
              <div class="input_container">
                <div>
                  <IconButton
                    aria-label="upload picture"
                    component="label"
                    size="large"
                  >
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      name="img"
                      onChange={srcChange}
                    />
                    <Profile_Photo />
                  </IconButton>
                  <label for="file">IT</label>
                </div>
                <div className="change_box_job">
                  <img src={imgSrc} className="change_img_job"></img>
                </div>
              </div>
            </div>
            <div className="blank_container1"></div>
            <div className="blank_container2"></div>
            <div className="btn_container">
              <button onClick={handleSubmit}>It_Submit</button>
            </div>
            <input type={"hidden"} name="emailSend" value={email}></input>
          </form>
        </div>
        <div className="sub_container">
          <div className="blank_container3"></div>
        </div>
      </div>
    </div>
  );
}
