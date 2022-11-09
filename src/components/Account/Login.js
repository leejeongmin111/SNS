import "../../styles/Account/Login.scss";
import logo from "../../images/jobsnsLogo.png";

import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SimpleSlider from "../Account_Setting/Slider";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, pw);
    await axios
      .post("http://127.0.0.1:3001/login", {
        email: email,
        pw: pw,
      })
      .then((res) => {
        console.log("문제없음");
        console.log(res);
        dispatch({ type: "test", email: res.data.email });
        sessionStorage.setItem("email", res.data.email);
        sessionStorage.setItem("nick", res.data.nick);
        nav("/mainsns");
      })
      .catch((err) => {
        console.log("문제발생", err);
      });
  };
  return (
    <div className="Flex_Login">
      <div class="image_container">
        <SimpleSlider />
      </div>
      <div class="container">
        <div class="form_container">
          <form
            action="http://127.0.0.1:3001/login"
            method="post"
            onSubmit={handleSubmit}
          >
            <img className="logo" src={logo} alt="Jobsns logo" />
            <div class="input_container">
              <input
                type="text"
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
            </div>
            <a href="#">Forgot your password?</a>
            <div className="login_btn">
              <button>Log In</button>
            </div>
          </form>
        </div>
        <div className="blank_container"></div>
        <div className="Sign_container">
          <div className="Sign_up">
            <a href="http://127.0.0.1:3001/register">
              You don't have account?
              <div className="SingUp_btn">
                <button>Sign Up</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
