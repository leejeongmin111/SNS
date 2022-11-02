import "../../styles/Special/SHeader.scss";
import searchIcon from "../../images/search.png";
import logo from "../../images/jobsnsLogo.png";

function Header() {
  return (
    <div className="container_Box">
      <div className="container_Logo">
        <img className="logo" src={logo} alt="Jobsns logo" />
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

export default Header;
