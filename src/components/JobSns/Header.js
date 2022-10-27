import "../../styles/Jobsns/Header.scss";
import searchIcon from "../../images/searchIcon.png";
import logo from "../../images/jobsnsLogo.png";
import report from "../../images/report.png";
import special from "../../images/special.png";

function Header() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="container_Logo">
          <img className="logo" src={logo} alt="Jobsns logo" />
        </div>
        <div className="container_Special">
          <img className="Icon" src={special} alt="special Tab" />
          <img className="Icon" src={report} alt="graph" />
        </div>
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
          <span className="searchText">검색</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
