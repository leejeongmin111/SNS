import "../../styles/Special/SQuestion.scss";
import QuestionCard from "./SQuestionCard";
import home from "../../images/home_off.png";

function Question() {
  return (
    <>
      <div className="container_QnA">
        <div className="QnA_Text"></div>
        <div className="search"></div>
      </div>
      <div className="questions">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </>
  );
}
export default Question;
