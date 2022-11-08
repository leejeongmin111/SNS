import "../../styles/MyPage/MySidebar.scss";
import Profile from "./MyProfile";
import Suggestions from "./MySuggestions";
import image from "../../images/profile.jpg";
import { useState } from "react";

function Sidebar() {
  const [email] = useState(sessionStorage.getItem("email"));
  return (
    <div className="sidebar_container">
      <div className="textcontainer">
        <span className="FriendsText">Your Friends</span>
      </div>
      <div className="Mainsidebar">
        <Profile username={email} iconSize="big" image={image} />
        <Suggestions />
      </div>
    </div>
  );
}

export default Sidebar;
