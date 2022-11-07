import "../../styles/JobSns/JobHeader.scss";
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
            nav("/mainsns");
          }}
        />
      </div>
      <div className="Jcontainer_Search">
        <div className="JsearchBox">
          <input
            className="JsearchInput"
            type="text"
            name=""
            placeholder="Search"
          />
          <button className="JsearchButton" href="#">
            <img className="JsearchIcon" src={searchIcon} alt="searchIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
