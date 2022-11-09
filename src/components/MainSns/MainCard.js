import "../../styles/MainSns/MainCard.scss";
import Profile from "./MainProfile";
import { ReactComponent as CardButton } from "../../images/cardButton.svg";
import Comment from "./MainComment";
import { useState } from "react";

import * as React from "react";
import { Form } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import MainImg_Click from "./MainImg_Click";
import axios from "axios";
import Post from "./MainPost";
import { useNavigate } from "react-router-dom";

import "../../styles/MainSns/MainCardMenu.scss";
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
    bd_cnt,
    image,
    comments,
    storyBorder,
    profile,
  } = props;

  const [email] = useState(sessionStorage.getItem("email"));

  //댓글 숨기기
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
      .then((res) => {
        if (res.data.result == "성공") {
          alert("스크랩 완료");
        } else {
          alert("스크랩 삭제");
        }
      })
      .catch((err) => {
        console.log("스크랩 안됨!!!" + err);
      });
  }
  // 좋아요 버rrrrrr튼
  function likeBt() {
    axios
      .post("http://127.0.0.1:3001/likeIn", {
        bd_seq: bd_seq, // 글 순번
        id: email, // 좋아요 누른 사람
        bd_id: bd_id, // 글 쓴 사람
      })
      .then((res) => {
        if (res.data.result == "성공") {
          alert("좋아요 완료");
        } else {
          alert("좋아요 삭제");
        }
      })
      .catch((err) => {
        console.log("좋아요 안됨!!!" + err);
      });
  }
  // 모달 설정
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 댓글 입력 창
  const [cmt, setCmt] = useState("");
  function chCmt(e) {
    setCmt(e.target.value);
  }

  // 댓글 입력
  function handleSubmit(e) {
    // e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/comment", {
        bd_seq: bd_seq, // 글 순번
        bd_id: bd_id, // 글 작성자
        mb_id: email, // 댓글 작성자
        comment: cmt, // 댓글 내용
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
          <Profile
            iconSize="medium"
            storyBorder={storyBorder}
            username={bd_id}
            image={profile}
          />
          <CardButton className="cardButton" />
        </header>

        <img
          className="cardImage"
          src={image}
          alt="card content"
          onClick={handleOpen}
        />

        {/* 아이콘 들 */}
        <div className="cardMenu">
          <div className="interactions">
            <Notifications className="icon" onClick={likeBt} />
            <Comments className="icon" onClick={changeshow} />
          </div>
          <Bookmark className="icon" onClick={save} />
        </div>

        <div className="likedBy">
          <Profile iconSize="small" hideAccountName={true} image={profile} />
          <span>
            Liked by <strong>{email}</strong> and{" "}
            <strong>{bd_likes} others</strong>
          </span>
        </div>
        <Post bd_id={bd_id} bd_content={bd_content}></Post>
        <div className="timePosted">
          <a onClick={changeshow} className="cmt_fold">
            {bd_cnt}개의 댓글 {fold}
          </a>
        </div>

        {/* 댓글  */}
        <div className="comments" style={show}>
          <br></br>
          {main_cmt.map((cm) => {
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
        <MainImg_Click
          bd_content={bd_content} // 글내용
          bd_id={bd_id} // 글 작성자
          bd_likes={bd_likes} // 좋아요수
          bd_cnt={bd_cnt} // 댓글 갯수
          main_cmts={main_cmt} //댓글 객체
          storyBorder={storyBorder}
          image={image}
          bd_seq={bd_seq}
          comments={comments}
        />
      </Modal>
    </>
  );
}

export default Card;
