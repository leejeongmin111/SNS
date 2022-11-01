import "../../styles/Jobsns/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import image from "../../images/profile.jpg";
import { useSelector } from "react-redux";

function Sidebar() {
  const email = useSelector((state) => state.email);
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar_navigation">
        <div className="sidebar_container">
          <div className="container_Special">{email}</div>
          <div className="container_Graph">Graph</div>
        </div>
      </div>
      <div className="sidebar">
        <Profile
          username={email}
          caption="Aleksandar Popović"
          urlText="Switch"
          iconSize="big"
          image={image}
        />
        <Suggestions />
      </div>
    </Sticky>
  );
}

export default Sidebar;
