import "../styles/MainSns.scss";
import Header from "./MainSns/MainHeader";
import Cards from "./MainSns/MainCards";
import Sidebar from "./MainSns/MainSidebar";
import Footer from "./MainSns/MainFooter";

function MainSns() {
  return (
    <main>
      <div className="blank"></div>
      <div className="Main_container">
        <Header />
        <div className="card_container">
          <Cards />
        </div>
        <Footer />
      </div>
      <div className="box">
        <Sidebar />
      </div>
    </main>
  );
}
export default MainSns;
