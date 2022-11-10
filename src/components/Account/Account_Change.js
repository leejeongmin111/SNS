// import * as React from "react";

import Jobcheckbox from "./Jobcheckbox";
import logo from "../../images/jobsnsLogo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/Account/Register.scss";
import "../../styles/Account/Account_Change.scss";
import Profile_Photo from "@mui/icons-material/AddPhotoAlternate";
import IconButton from "@mui/material/IconButton";

export default function Account_Change() {
  const [email, setEmail] = useState(""); //아이디
  const [pw, setPw] = useState(""); // 비번
  const [nick, setNick] = useState(""); // 닉네임
  const [imgSrc, setimgSrc] = useState(""); // 이미지
  const [email1] = useState(sessionStorage.getItem("email"));
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
            action="http://127.0.0.1:3001/changeProfile"
            method="post"
            encType="multipart/form-data"
          >
            <div class="sign_container">
              <img className="logo" src={logo} alt="Jobsns logo" />
              <div class="input_container">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input type={"hidden"} name="emailSend" value={email1}></input>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPw(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password Check"
                  name="password CK"
                  onChange={(e) => setPw(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Nick Name"
                  name="NickName"
                  onChange={(e) => setNick(e.target.value)}
                />
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
                  <label for="file">profile</label>
                </div>
                <div className="change_box">
                  <img src={imgSrc} className="change_img"></img>
                </div>
              </div>
            </div>
            <div className="blank_container1"></div>
            <div className="blank_container2"></div>
            <div className="btn_container">
              <button onClick={handleSubmit}>Account_Change</button>
            </div>
          </form>
        </div>
        <div className="sub_container">
          <div className="blank_container3"></div>
        </div>
      </div>
    </div>
  );
}
