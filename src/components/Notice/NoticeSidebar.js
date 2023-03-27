import "../../styles/Notice/NoticeSidebar.scss";
import Profile from "./NoticeProfile";
import Suggestions from "./NoticeSuggestions";
import image from "../../images/profile.jpg";
import { useState } from "react";

function Sidebar() {
  const [emailTest] = useState(sessionStorage.getItem("email"));
  return (
    <div className="sidebar_container">
      <div className="textcontainer">
        <span className="FriendsText">Your Friends</span>
      </div>
      <div className="Mainsidebar">
        <Profile
          username={emailTest}
          caption="Aleksandar Popović"
          urlText="Switch"
          iconSize="big"
          image={image}
        />
        <Suggestions />
      </div>
    </div>
  );
}

export default Sidebar;
