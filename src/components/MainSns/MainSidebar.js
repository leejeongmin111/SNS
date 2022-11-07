import "../../styles/MainSns/MainSidebar.scss";
import Profile from "./MainProfile";
import Suggestions from "./MainSuggestions";
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
        if (res.data.photo === null) {
          setPhoto(basic);
        } else {
          setPhoto(res.data.photo);
        }
      })
      .catch((err) => {
        console.log("mainside끝내기 실패", err);
      });
  }, []);

  return (
    <div className="sidebar_container">
      <div className="textcontainer">
        <span className="FriendsText">Your Friends</span>
      </div>
      <div className="Mainsidebar">
        <Profile
          username={email}
          urlText="Switch"
          iconSize="big"
          image={photoInfo}
        />
        <Suggestions />
      </div>
    </div>
  );
}

export default Sidebar;
