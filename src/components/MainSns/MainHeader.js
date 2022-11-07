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
        <img
          className="logo"
          src={logo}
          alt="Jobsns logo"
          onClick={() => {
            nav("/jobsns");
          }}
        />
      </div>
      <Box component="form" action="#">
        <div className="Mcontainer_Search">
          <div className="MsearchBox">
            <input
              className="MsearchInput"
              type="text"
              name=""
              placeholder="Search"
            />
            <button className="MsearchButton" href="#" type="submit">
              <img className="MsearchIcon" src={searchIcon} alt="searchIcon" />
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Header;
