import "../styles/Special.scss";
import SPHeader from "./Special/SHeader";
import Footer from "./Special/SFooter";
import QuestionHeader from "./Special/SQuestionHeader";
import Question from "./Special/SQuestionCards";
import SideHeader from "./Special/SSideHeader";
function Special() {
  return (
    <main>
      <div className="SP_blank"></div>
      <div className="Special_container">
        <SPHeader />
        <div className="container_QnA">
          <div className="container_main">
            <QuestionHeader />
            <Question />
          </div>
          <Footer />
        </div>
      </div>
      <div className="SP_box">
        <SideHeader />
      </div>
    </main>
  );
}
export default Special;
