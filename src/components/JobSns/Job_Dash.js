import "../../styles/App.scss";
import Header from "./Header";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Job_Dash() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Job_Dash;
