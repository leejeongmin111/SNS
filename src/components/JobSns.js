import "../styles/JobSns.scss";
import Header from "./JobSns/JobHeader";
import Cards from "./JobSns/JobCards";
import Sidebar from "./JobSns/JobSidebar";
import Footer from "./JobSns/JobFooter";
import SideHeader from "./JobSns/JobSideHeader";

function JobSns() {
  return (
    <main>
      <div className="jblank"></div>
      <div className="Job_container">
        <Header />
        <div className="card_container">
          <Cards />
        </div>
        <Footer />
      </div>
      <div className="jbox">
        <SideHeader />
        <Sidebar />
      </div>
    </main>
  );
}
export default JobSns;
