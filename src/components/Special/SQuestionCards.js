import "../../styles/Special/SQuestionCards.scss";
import QuestionCard from "./SQuestionCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Question() {
  const [specials, setSpecials] = useState([]);
  const [cmts, setCmts] = useState([]);
  
  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/specials", {})
      .then((res) => {
        setSpecials(res.data.specials);
        setCmts(res.data.cmts);
      })
      .catch((err) => {
        console.log("문제발생", err.response.data);
      });
  },[]);

  return (
    <>
    <div className="questions">
    {specials.map((special)=>{
      return(
      <QuestionCard 
        bd_seq  = {special.bd_seq}      // 게시글 번호
        bd_title  = {special.bd_title}    // 글 제목
        bd_content = {special.bd_content}   // 글 내용
        bd_id   = {special.bd_id}      // 글 작성자 
        bd_cnt  = {special.bd_cnt}      // 댓글 수 
        bd_likes  = {special.bd_likes}    // 좋아요 수
        bd_type = {special.bd_type}       // 프로그램 종류
        cmts = {cmts}                    // 댓글 들
      />
      );
    })
   } 

    </div>
    </>
  );
}
export default Question;
