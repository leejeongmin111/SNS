import "../../styles/JobSns/JobSideHeader.scss";

function SideHeader() {
  return (
    <div className="container_Tab">
      <div className="container_Special">
        <button className="Special_Btn" href="#">
          Special
        </button>
      </div>
      <div className="container_Status">
        <button className="Status_Btn" href="#">
          Status
        </button>
      </div>
    </div>
  );
}

export default SideHeader;
