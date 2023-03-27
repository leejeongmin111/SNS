import "../../styles/Special/SQuestionCard.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import html_img from "../../images/Program/html.png";
import java_img from "../../images/Program/java1.png";
import python_img from "../../images/Program/python.png";
import react_img from "../../images/Program/react.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import SQuestion_Click from "./SQuestion_Click";

function QuestionCard(props) {
  const {
    bd_seq, // 게시글 번호
    bd_title, // 글 제목
    bd_content, // 글 내용
    bd_id, // 글 작성자
    bd_cnt, // 댓글 수
    bd_likes, // 좋아요 수
    bd_type, // 프로그램 종류
    cmts, // 댓글들 (배열)
  } = props;
  // 모달 설정
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [program, setProgram] = useState();

  // 프로그램 종류 구하기  Java Python React Html
  useEffect(() => {
    if (bd_type == "Java") {
      setProgram(java_img);
    } else if (bd_type == "Python") {
      setProgram(python_img);
    } else if (bd_type == "React") {
      setProgram(react_img);
    } else if (bd_type == "Html") {
      setProgram(html_img);
    } else {
      setProgram(html_img);
    }
  }, []);

  return (
    <>
      <div className="Card_container" onClick={handleOpen}>
        <div className="Card_image">
          <img src={program} className="program_img"></img>
        </div>
        <div className="Card_text">
          {bd_title}
          {/* <div>댓글 수 :{bd_cnt} 좋아요 수 :{bd_likes}</div> */}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SQuestion_Click
          bd_seq={bd_seq} // 게시글 번호
          bd_title={bd_title} // 글 제목
          bd_content={bd_content} // 글 내용
          bd_id={bd_id} // 글 작성자
          bd_cnt={bd_cnt} // 댓글 수
          bd_likes={bd_likes} // 좋아요 수
          bd_type={bd_type} // 프로그램 종류
          cmts={cmts} // 댓글
        />
      </Modal>
    </>
  );
}
export default QuestionCard;
