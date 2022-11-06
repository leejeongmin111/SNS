import "../styles/Status.scss";
import Header from "./Status/StatusHeader";
import Footer from "./Status/StatusFooter";
import Sidebar from "./Status/StatusSidebar";
import SideHeader from "./JobSns/JobSideHeader";

import StatusGraph from "./Status/StatusGraph";

function Status() {
  return (
    <main>
      <div className="blank"></div>
      <div className="Status_container">
        <Header />
        <div className="Graph">
          <StatusGraph />
        </div>
        <Footer />
      </div>
      <div className="box">
        <Sidebar />
      </div>
    </main>
  );
}
export default Status;
