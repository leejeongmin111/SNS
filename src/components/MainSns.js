import "../styles/App.scss";
import Header from "../components/JobSns/Header";
import Cards from "../components/JobSns/Cards";
import Sidebar from "../components/JobSns/Sidebar";
import Footer from "../components/JobSns/Footer";
import { Route, Routes } from "react-router-dom";
import Register from "../components/Account/Register";

function MainSns() {
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
export default MainSns;
