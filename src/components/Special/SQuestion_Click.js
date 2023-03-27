import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import "../../styles/Special/SQuestion_Click.scss";
import html_img from "../../images/Program/html.png";
import java_img from "../../images/Program/java1.png";
import python_img from "../../images/Program/python.png";
import react_img from "../../images/Program/react.png";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import CardMenu from "../MainSns/MainCardMenu";
import Comment from "./SComment";
import { FunctionsOutlined } from "@mui/icons-material";
import Right from "@mui/icons-material/KeyboardArrowRight";
import Left from "@mui/icons-material/KeyboardArrowLeft";

// 에러 이미지 모음

import javaerr from "../../images/ErrorImage/javaErr1.png";

// 모달 창 크기 설정
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 900,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
};

function SQuestion_Click(props) {
  const {
    bd_seq, // 게시글 번호
    bd_title, // 글 제목
    bd_content, // 글 내용
    bd_id, // 글 작성자
    bd_cnt, // 댓글 수
    bd_likes, // 좋아요 수
    bd_type, // 프로그램 종류
    cmts, // 댓글
  } = props;

  const [program, setProgram] = useState();
  const [cmt_num, setCmt_num] = useState(0);

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
      setProgram("");
    }
  });
  //댓글 제출
  const [email] = useState(sessionStorage.getItem("email"));
  const [nick] = useState(sessionStorage.getItem("nick"));
  const [cmt, setCmt] = useState("");
  function chCmt(e) {
    setCmt(e.target.value);
  }
  function cmt_plus() {
    if (cmt_num !== cmts.length - 1) {
      setCmt_num(cmt_num + 1);
    }
  }
  function cmt_minus() {
    if (cmt_num !== 0) {
      setCmt_num(cmt_num - 1);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/comment", {
        bd_seq: bd_seq, // 글 순번
        bd_id: bd_id, // 글 작성자
        mb_id: email, // 댓글 작성자
        comment: cmt, // 댓글 내용
      })
      .then((res) => {
        console.log("아이디값 가져와짐", res);
        // window.location.href = "/mainsns";
      })
      .catch((err) => {
        console.log("문제발생", err.response.data);
      });
  }
  return (
    <>
      <Box className="SQ_container" sx={style}>
        <Box className="SQ_left">
          <Box className="SQ_title">
            <div className="title">
              <img src={program} className="SQ_img_click"></img>
              <div className="title_text">
                <h1 align="left">{bd_title}</h1>
              </div>
            </div>
            <div className="input_img">
              <img src={javaerr} />
            </div>
            <div className="text_con">
              <span className="ttx">{bd_content}</span>
            </div>
          </Box>
        </Box>
        <Box className="SQ_Right">
          <Box className="comment_con">
            <div className="comment_text">Comments</div>
            <Box className="comments">
              {cmts.map(function (cmt) {
                if (bd_seq == cmt.bd_seq) {
                  return (
                    <Comment
                      key={cmt.cmt_seq}
                      bd_seq={cmt.bd_seq} // 원글 번호
                      content={cmt.cmt_content} // 댓글 내용
                      accountName={cmt.mb_id} // 댓글 작성자
                      bd_id={cmt.bd_id} //원글 작성자
                    />
                  );
                }
              })}
            </Box>
            <Box
              className="SQ_input_comment"
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, marginTop: 0 }}
            >
              {/* 댓글 입력 창 */}
              <TextField
                className="textField"
                multiline
                rows={2}
                defaultValue=""
                name="comment"
                onChange={chCmt}
                sx={{ width: 400, paddingLeft: 2.5 }}
              />
              <Button
                className="submit_btn"
                type="submit"
                onClick={() => (window.location.href = "/special")}
              >
                post
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default SQuestion_Click;
