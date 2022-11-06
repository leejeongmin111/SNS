import "../../styles/Special/SQuestionCards.scss";
import QuestionCard from "./SQuestionCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Question() {
  const [sp,setSp] = useState([]);

  useEffect(() => {
    console.log("special")
    axios
      .post("http://127.0.0.1:3001/specials", {})
      .then((res) => {
        setSp(res.data.specials); // 배열 값 왜 안들어가짐 ??? 
        console.log("여ㅣㅇ겨이",res.data.specials );
        console.log("여ㅣㅇ겨이"+sp);
      })
      .catch((err) => {
        console.log("문제발생", err.response.data);
      });
  },[]);

  return (
    <>
    <div className="questions">
    {sp.map(function(special){
      <QuestionCard 
        // bd_seq  = {special.bd_seq}      // 게시글 번호
        // bd_title  = {special.bd_title}    // 글 제목
        // bd_content = {special.bd_content}   // 글 내용
        // bd_id   = {special.bd_id}      // 글 작성자 
        // bd_cnt  = {special.bd_cnt}      // 댓글 수 
        // bd_likes  = {special.bd_likes}    // 좋아요 수
        // bd_type = {special.bd_type}       // 프로그램 종류
      />
    })
   } 

    </div>
    </>
  );
}
export default Question;
