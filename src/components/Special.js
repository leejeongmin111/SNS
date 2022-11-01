import "../styles/App.scss";
import Special_Header from "./Special/Header";
import Special_Footer from "./Special/Footer";
import Special_Question from "./Special/Question";
import { Route, Routes } from "react-router-dom";

function Special() {
  return (
    <div className="App">
      <Special_Header />
      <main>
        <div className="container">
          <Special_Question />
        </div>
      </main>
      <Special_Footer />
    </div>
  );
}
export default Special;
