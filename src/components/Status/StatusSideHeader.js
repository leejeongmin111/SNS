import "../../styles/Status/StatusSideHeader.scss";
import { useNavigate } from "react-router-dom";

function SideHeader() {
  const nav = useNavigate();

  return (
    <div className="container_head">
      <div className="Special_con">
        <button
          className="special_Btn"
          onClick={() => {
            nav("/special");
          }}
        >
          Special
        </button>
      </div>
    </div>
  );
}

export default SideHeader;
