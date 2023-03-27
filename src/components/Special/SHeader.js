import "../../styles/Special/SHeader.scss";
import searchIcon from "../../images/search.png";
import logo from "../../images/jobsnsLogoR.png";
import { useNavigate } from "react-router-dom";

function SPHeader() {
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
      <div className="container_Search">
        <div className="searchBox">
          <input
            className="searchInput"
            type="text"
            name=""
            placeholder="Search"
          />
          <button className="searchButton" href="#">
            <img className="searchIcon" src={searchIcon} alt="searchIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SPHeader;
