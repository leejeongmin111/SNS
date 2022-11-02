import "../../styles/MainSns/MainSidebar.scss";
import Profile from "./MainProfile";
import Suggestions from "./MainSuggestions";
import image from "../../images/profile.jpg";
import { useSelector } from "react-redux";

function Sidebar() {
  const email = useSelector((state) => state.email);
  return (
    <div className="sidebar_container">
      <div className="textcontainer">
        <span className="FriendsText">Your Friends</span>
      </div>
      <div className="Mainsidebar">
        <Profile
          username={email}
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
