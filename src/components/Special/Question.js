import "../../styles/Special/question.scss";
import QuestionCard from "./QuestionCard";
import home from "../../images/home.png";

function Question() {
  return (
    <>
      <div className="header_container">
        <div className="story">여기는 코딩 문답 페이지</div>
        <div className="sort">
          <img className="sortIcon" src={home} alt="sort" />
        </div>
      </div>
      <div className="question_container">
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
