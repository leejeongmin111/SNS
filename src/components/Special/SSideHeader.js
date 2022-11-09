import "../../styles/Special/SSideHeader.scss";
import { useNavigate } from "react-router-dom";

function SideHeader() {
  const nav = useNavigate();

  return (
    <div className="container_head">
      <div className="status_con">
        <button
          className="status_Btn"
          onClick={() => {
            nav("/status");
          }}
        >
          Status
        </button>
      </div>
    </div>
  );
}

export default SideHeader;
