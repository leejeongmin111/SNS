import "../../styles/JobSns/JobCard.scss";
import Profile from "./JobProfile";
import { ReactComponent as CardButton } from "../../images/cardButton.svg";
import CardMenu from "./JobCardMenu";
import Comment from "./JobComment";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import JobImg_Click from "./JobImg_Click";
import axios from "axios";
import Post from "./JobPost";

import "../../styles/JobSns/JobCardMenu.scss";
import { ReactComponent as Inbox } from "../../images/inbox.svg";
import { ReactComponent as Comments } from "../../images/comments.svg";
import { ReactComponent as Notifications } from "../../images/notifications.svg";
import { ReactComponent as Bookmark } from "../../images/bookmark.svg";

function Card(props) {
  const {
    bd_id, // 글 작성자
    bd_content, // 글 내용
    bd_seq, // 글 번호
    bd_likes, // 좋아요 갯수
    main_cmt, // 댓글 객체
    image,
    comments,
    storyBorder,
    likedByText,
    likedByNumber,
    hours,
  } = props;

  // 로그인되있는 아이디
  const [email] = useState(sessionStorage.getItem("email"));
  const [show, setShow] = useState({ display: "none" });
  const [num, setNum] = useState(0);
  const [fold, setFold] = useState("보기");
  function changeshow() {
    if (num == 0) {
      setNum(num + 1);
      setShow({ display: "block" });
      setFold("접기");
    } else {
      setNum(0);
      setShow({ display: "none" });
      setFold("보기");
    }
  }
  // 게시글 저장하기
  function save() {
    axios
      .post("http://127.0.0.1:3001/saveList", {
        bd_seq: bd_seq,
        id: email,
      })
      .catch((err) => {
        console.log("게시물 저장 안됨!!!" + err);
      });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  // 모달 설정
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  {
    /*  댓글 입력 창 */
  }
  const [cmt, setCmt] = useState("");
  function chCmt(e) {
    setCmt(e.target.value);
  }

  // 댓글 입력
  function handleSubmit(e) {
    console.log(bd_seq);
    console.log(bd_id);
    console.log(email);
    //console.log(temp_cm);
    axios
      .post("http://127.0.0.1:3001/comment", {
        bd_seq: bd_seq, // 글 순번
        bd_id: bd_id, // 글 작성자
        mb_id: email, // 댓글 작성자
        cmt_content: cmt, // 댓글 내용
      })
      .then((res) => {
        console.log("아이디값 가져와짐", res);
        window.location.href = "/mainsns";
      })
      .catch((err) => {
        console.log("문제발생", err.response.data);
      });
  }
  return (
    <>
      <div className="card">
        <header>
          <Profile iconSize="medium" storyBorder={storyBorder} />
          <CardButton className="cardButton" />
        </header>
        <img
          className="cardImage"
          src={image}
          alt="card content"
          onClick={handleOpen}
        />

        {/* 게시글 내용 */}
        <Post bd_id={bd_id} bd_content={bd_content}></Post>

        {/* 아이콘들 */}
        <div className="cardMenu">
          <div className="interactions">
            <Notifications className="icon" />
            <Comments className="icon" onClick={changeshow} />
            <Inbox className="icon" />
          </div>
          <Bookmark className="icon" onClick={save} />
        </div>

        <div className="likedBy">
          <Profile iconSize="small" hideAccountName={true} />
          <span>
            Liked by <strong>{likedByText}</strong> and{" "}
            <strong>{bd_likes} others</strong>
          </span>
        </div>
        <div className="timePosted">
          {hours} HOURS AGO{" "}
          <a onClick={changeshow} className="cmt_fold">
            {/* {comments.length}개의 댓글 {fold} */}
            {cmt.length}개의 댓글 {fold}
          </a>
        </div>

        {/* 댓글  */}
        <div className="comments" style={show}>
          <br></br>
          {main_cmt &&
            main_cmt.map((cm) => {
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
          {/* 아래는 원래 거  */}
          {/* {comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                accountName={comment.user}
                comment={comment.text}
              />
            );
          })} */}
        </div>

        <div className="addComment" style={show}>
          <Box
            className="input_comment"
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, marginTop: 0 }}
          >
            {/* 댓글 입력 창 */}
            <input
              type="text"
              name="comment"
              maxlength="20"
              size="75"
              placeholder="Add a commnet..."
              onChange={chCmt}
            ></input>
            <Button type="submit">post</Button>
          </Box>
        </div>
      </div>

      {/* 이미지 클릭 시 모달 창 */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <JobImg_Click
          accountName="rafagrassetti"
          storyBorder={storyBorder}
          image={image}
          bd_seq={bd_seq}
          main_cmts={main_cmt}
          comments={comments}
          likedByText={likedByText}
          likedByNumber={likedByNumber}
          hours={hours}
        />
      </Modal>
    </>
  );
}

export default Card;
