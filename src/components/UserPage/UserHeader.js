import "../../styles/UserPage/UserHeader.scss";
import searchIcon from "../../images/search.png";
import logo from "../../images/jobsnsLogo.png";
import { useNavigate } from "react-router-dom";
function Header() {
  const nav = useNavigate();

  return (
    <div className="usercontainer_Box">
      <div className="usercontainer_Logo">
        <img
          className="logo"
          src={logo}
          alt="Jobsns logo"
          onClick={() => {
            nav("/jobsns");
          }}
        />
      </div>
      <div className="usercontainer_Search">
        <div className="usersearchBox">
          <input
            className="usersearchInput"
            type="text"
            name=""
            placeholder="Search"
          />
          <button className="usersearchButton" href="#">
            <img className="usersearchIcon" src={searchIcon} alt="searchIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
