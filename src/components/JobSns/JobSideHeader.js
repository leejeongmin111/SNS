import "../../styles/JobSns/JobSideHeader.scss";
import { useNavigate } from "react-router-dom";


function SideHeader() {

  const nav = useNavigate();

  return (
    <div className="container_Tab">
      <div className="container_Special">
        <button className="Special_Btn" onClick={()=>{nav('/special')}}>
          Special
        </button>
      </div>
      <div className="container_Status">
        <button className="Status_Btn"onClick={()=>{nav('/status')}}>
          Status
        </button>
      </div>
    </div>
  );
}

export default SideHeader;
