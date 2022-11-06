import "../../styles/Special/SQuestionCard.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import html_img from "../../images/Program/html.jfif"
import java_img from "../../images/Program/java1.jfif"
import python_img from "../../images/Program/python.png"
import react_img from "../../images/Program/react.jfif"


function QuestionCard(props) {
  const {bd_seq,     // 게시글 번호
        bd_title,    // 글 제목
        bd_content,  // 글 내용
        bd_id,       // 글 작성자 
        bd_cnt,      // 댓글 수 
        bd_likes,    // 좋아요 수
        bd_type      // 프로그램 종류
      } = props;

      // 프로그램 종류 구하기  Java Python React Html
  let program;      
  if(bd_type=="Java"){
    program="java_img";
  }else if(bd_type=="Python"){
    program="python_img";
  }else if(bd_type=="React"){
    program="react_img";
  }else if(bd_type=="Html"){
    program="html_img";
  }
  

  return (
    <div className="Card_container">
      <div className="Card_image"></div>
      <div className="Card_text">{bd_content}</div>
    </div>
  );
}
export default QuestionCard;
