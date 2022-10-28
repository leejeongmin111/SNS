import "../../styles/Jobsns/Header.scss";
import searchIcon from "../../images/searchIcon.png";
import logo from "../../images/jobsnsLogo.png";

function Header() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="container_Logo">
          <img className="logo" src={logo} alt="Jobsns logo" />
        </div>
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
