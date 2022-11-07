import "../../styles/Status/StatusHeader.scss";
import searchIcon from "../../images/search.png";
import logo from "../../images/jobsnsLogoR.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();

  return (
    <div className="container_Box">
      <div className="container_Logo">
        <img
          className="logo"
          src={logo}
          alt="Jobsns logo"
          onClick={() => {
            nav("/jobsns");
          }}
        />
      </div>
      <div className="stcontainer_Search">
        <div className="stsearchBox">
          <input
            className="stsearchInput"
            type="text"
            name=""
            placeholder="Search"
          />
          <button className="stsearchButton" href="#">
            <img className="stsearchIcon" src={searchIcon} alt="searchIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
