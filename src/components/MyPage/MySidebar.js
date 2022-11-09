import "../../styles/MyPage/MySidebar.scss";
import Profile from "./MyProfile";
import Suggestions from "./MySuggestions";
import { useState, useEffect } from "react";
import axios from "axios";
import basic from "../../images/basicprofile.jpg";

function Sidebar() {
  const [email] = useState(sessionStorage.getItem("email"));
  const [photoInfo, setPhoto] = useState("");

  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/mainside", {
        email: email,
      })
      .then((res) => {
        console.log("mainside시작", res);
        setPhoto(res.data.photo);
      })
      .catch((err) => {
        console.log("mainside끝내기 실패", err);
      });
  }, []);
  let profileDt;
  if (photoInfo === null) {
    profileDt = basic;
  } else {
    window.Buffer = window.Buffer || require("buffer").Buffer;
    let encode = window.Buffer.from(photoInfo).toString("base64");
    profileDt = "data:image/png;base64," + encode;
  }

  return (
    <div className="Mysidebar_container">
      <div className="Mytextcontainer">
        <span className="MyFriendsText">Follow Suggestions</span>
      </div>
      <div className="MyMainsidebar">
        <Profile
          username={email}
          urlText="Switch"
          iconSize="big"
          image={profileDt}
        />
        <Suggestions />
      </div>
    </div>
  );
}

export default Sidebar;
