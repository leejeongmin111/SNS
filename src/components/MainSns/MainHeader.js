import "../../styles/MainSns/MainHeader.scss";
import searchIcon from "../../images/search.png";
import logo from "../../images/jobsnsLogo.png";
import { Box } from "@mui/system";

function Header() {
  function dd(){
    console.log("dd")
  }
  return (
    <div className="container_Box">
      <div className="container_Logo">
        <img className="logo" src={logo} alt="Jobsns logo" />
      </div>
      <Box component="form" action ="#">
      <div className="container_Search">
        <div className="searchBox">
          <input
            className="searchInput"
            type="text"
            name=""
            placeholder="Search"
          />
          <button className="searchButton" href="#" type="submit" onChange={dd}>
            <img className="searchIcon" src={searchIcon} alt="searchIcon" />
          </button>
        </div>
      </div>
      </Box>
    </div>
  );
}

export default Header;
