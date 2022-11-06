import "../styles/Special.scss";
import Header from "./Special/SHeader";
import Footer from "./Special/SFooter";
import QuestionHeader from "./Special/SQuestionHeader";
import Question from "./Special/SQuestionCards";

function Special() {
  return (
    <main>
      <div className="blank"></div>
      <div className="Special_container">
        <Header />
        <div className="container_QnA">
          <div className="container_main">
            <QuestionHeader />
            <Question/>
          </div>
          <Footer />
        </div>
      </div>
      <div className="box"></div>
    </main>
  );
}
export default Special;
