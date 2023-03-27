// import * as React from "react";

import Jobcheckbox from "./Jobcheckbox";
import logo from "../../images/jobsnsLogo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/Account/Register.scss";
import SimpleSlider from "../Account_Setting/Slider";

export default function Register() {
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");
  const [rn, setRn] = useState("");
  const [phone, setPhone] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, pw, name, nick, rn, phone, job);
    await axios
      .post("http://127.0.0.1:3001/register", {
        email: email,
        pw: pw,
        name: name,
        nick: nick,
        rn: rn,
        phone: phone,
        job: job,
      })
      .then((res) => {
        console.log("문제없음", res);
        nav("/");
      })
      .catch((err) => {
        console.log("문제발생", err);
      });
  };

  return (
    <div className="Flex">
      <div class="flex_container">
        <form action="#">
          <div class="sign_container">
            <img className="logo" src={logo} alt="Jobsns logo" />
            <div class="input_container">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
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
              />
              <input
                type="text"
                placeholder="Name"
                name="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Nick Name"
                name="NickName"
                onChange={(e) => setNick(e.target.value)}
              />
              <input
                type="text"
                placeholder="주민 등록 번호"
                name="Resident_Number"
                onChange={(e) => setRn(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="blank_container1"></div>
          <div class="job_container">
            <span>직 업 을 선 택 해 주 세 요</span>
            <Jobcheckbox setJob={setJob} />
          </div>
          <div className="blank_container2"></div>
          <div className="btn_container">
            <button onClick={handleSubmit}>Sign Up</button>
          </div>
        </form>
      </div>
      <div className="sub_container">
        <a href="/">
          <div className="return_container">
            <span>이미 계정이 있으신가요?</span>
            <div className="return_btn">
              <button>RETURN</button>
            </div>
          </div>
        </a>
        <div className="blank_container3"></div>
        <div class="image_container">
          <SimpleSlider />
        </div>
      </div>
    </div>
  );
}
