import { Box } from "@mui/system";
import "../../styles/MainSns/MainImg_Click.scss";
import Comment from "./MainComment";
import Button from "@mui/material/Button";
import CardMenu from "./MainCardMenu";
import { useState } from "react";
import axios from "axios";
import Mainpost from "./MainPost";

// box 스타일 설정
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 800,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
};

function MainImg_Click(props) {
  // const { image, main_cmts, bd_seq, bd_id } = props;

  const {
    bd_content, // 글내용
    bd_id, // 글 작성자
    bd_likes, // 좋아요수
    bd_cnt, // 댓글 갯수
    main_cmts, //댓글 객체
    storyBorder,
    image,
    bd_seq,
    comments,
    likedByText,
  } = props;

  const [email] = useState(sessionStorage.getItem("email"));
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("댓글js파일");
    axios
      .post("http://127.0.0.1:3001/comment", {
        email: email,
        bd_seq: bd_seq,
        bd_id: bd_id,
        comment: comment,
      })
      .then((res) => {
        console.log("mainImg_click : " + res.data);
        window.location.href = "/mainsns";
      })
      .catch((err) => {
        console.log("문제발생", err.response.data);
      });
  }

  return (
    <>
      <Box sx={style} className="img_click_main">
        <img src={image} className="img_click"></img>
        {/* <Box className="click_box1">게시글 내용들</Box> */}
        <Box className="click_box2">
          <Mainpost
            className="img_post_cm"
            bd_content={bd_content}
            bd_id={bd_id}
            bd_likes={bd_likes}
          ></Mainpost>
          <CardMenu bd_seq={bd_seq} />

          {/* 댓글  */}
          <div className="comments">
            <br></br>
            {main_cmts.map((cm) => {
              console.log(cm.cmt_content);
              if (cm.bd_seq == bd_seq) {
                return (
                  <Comment
                    key={cm.cmt_seq}
                    bd_id={cm.bd_id}
                    accountName={cm.mb_id}
                    comment={cm.cmt_content}
                  />
                );
              }
            })}
          </div>
          <Box
            className="input_comment"
            component="form"
            noValidate
            sx={{ mt: 1, marginTop: 0 }}
            onSubmit={handleSubmit}
          >
            {/* 댓글 입력 창 */}
            <input
              type="text"
              name="name"
              maxlength="20"
              size="60"
              placeholder="Add a commnet..."
              className="img_click_input"
              onChange={(e) => setComment(e.target.value)}
            ></input>
            <Button type="submit" className="img_post">
              post
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default MainImg_Click;
