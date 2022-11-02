import "../../styles/MainSns/MainHeader.scss";
import searchIcon from "../../images/search.png";
import logo from "../../images/jobsnsLogo.png";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";


function Header() {
 
  
  const nav = useNavigate();

  
  return (
    <div className="container_Box">
      <div className="container_Logo">
        <img className="logo" src={logo} alt="Jobsns logo" onClick={()=>{nav('/jobsns')}}/>
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
          <button className="searchButton" href="#" type="submit" >
            <img className="searchIcon" src={searchIcon} alt="searchIcon" />
          </button>
        </div>
      </div>
      </Box>
    </div>
  );
}

export default Header;
