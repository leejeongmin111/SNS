import "../../styles/Special/SQuestionCard.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function QuestionCard() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/specialTitle", {})
      .then((res) => {
        console.log("페이지에나온", res.data.title);
        setTitle(res.data.title);
      })
      .catch((err) => {
        console.log("문제발생", err.response.data);
      });
  });

  return (
    <div className="Card_container">
      <div className="Card_image"></div>
      <div className="Card_text">{title}</div>
    </div>
  );
}
export default QuestionCard;
