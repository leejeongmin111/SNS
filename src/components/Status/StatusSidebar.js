import "../../styles/Status/StatusSidebar.scss";
import Profile from "./StatusProfile";
import Suggestions from "./StatusSuggestions";
import image from "../../images/profile.jpg";

function Sidebar() {
  return (
    <div className="sidebar_container">
      <div className="textcontainer">
        <span className="FriendsText">Your Friends</span>
      </div>
      <div className="Mainsidebar">
        <Profile
          username="aleks.popovic"
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
