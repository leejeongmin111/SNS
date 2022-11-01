import "../styles/Special.scss";
import Header from "./Special/SHeader";
import Footer from "./Special/SFooter";
import Question from "./Special/SQuestion";

function Special() {
  return (
    <main>
      <div className="blank"></div>
      <div className="Special_container">
        <Header />
        <div className="container_QnA">
          <Question />
        </div>
        <Footer />
      </div>
      <div className="box"></div>
    </main>
  );
}
export default Special;
