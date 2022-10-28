import "../../styles/Jobsns/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import image from "../../images/profile.jpg";

function Sidebar() {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar_navigation">
        <div className="sidebar_container">
          <div className="container_Special">Special</div>
          <div className="container_Graph">Graph</div>
        </div>
      </div>
      <div className="sidebar">
        <Profile
          username="aleks.popovic"
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
