import "../../styles/MainSns/MainCard.scss";
import Profile from "./MainProfile";
import { ReactComponent as CardButton } from "../../images/cardButton.svg";
import CardMenu from "./MainCardMenu";
import Comment from "./MainComment";
import { useState } from "react";
import { useState , useEffect} from "react";

import * as React from "react";
import { Form } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import MainImg_Click from "./MainImg_Click";
import axios from "axios";
import Post from "./MainPost";


function Card(props) {
  const {
    bd_id,        // 글 작성자
    bd_content,   // 글 내용
    bd_seq,       // 글 번호 
    bd_likes,     // 좋아요 갯수
    bd_time,      // 글 작성일 
<<<<<<< HEAD
    main_cmt,         // 댓글 객체                
=======
    main_cmt,     // 댓글 객체                
>>>>>>> 54c92f16e1bc3ff5ee7f4ff1598c8d15eb0ea152
    image,     
    comments,     
    storyBorder,
    likedByText,
    likedByNumber,
    hours,
  } = props;
  
<<<<<<< HEAD
=======
  // 댓글 개수 구하기
  // useEffect(() => {
  //   let cmt_count=0;
  //   main_cmt.map((count)=>{
  //     if(bd_seq==count.bd_seq){
  //       cmt_count++;
  //     }
  //   })
  // }, []);
  
>>>>>>> 54c92f16e1bc3ff5ee7f4ff1598c8d15eb0ea152
  // email: rows[0].bd_id,
  // content: rows[0].bd_content,
   
  
  // 로그인되있는 아이디
  const [email] = useState(sessionStorage.getItem("email"));

  //댓글 숨기기
  const [show, setShow] = useState({ display: "none" });
  const [num, setNum] = useState(0);
  const [fold, setFold] = useState("보기");
  // const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
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
  // 모달 설정
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 댓글 입력 창
  const [cmt,setCmt] = useState("");
  function chCmt(e){
    setCmt(e.target.value);
  }

  // 댓글 입력 
  function handleSubmit(e) {
    e.preventDefault();
    console.log(bd_seq);
    console.log(bd_id);
    console.log(email);
    //console.log(temp_cm);
    axios
      .post("http://127.0.0.1:3001/comment", {
        bd_seq: bd_seq,        // 글 순번 
        bd_id: bd_id,          // 글 작성자 
        mb_id: email,         // 댓글 작성자 
        cmt_content: cmt,  // 댓글 내용
            
      })
      .then((res) => {
        console.log("아이디값 가져와짐",res);
<<<<<<< HEAD
        // window.location.href = "/mainsns";
=======
        window.location.href = "/mainsns";
>>>>>>> 54c92f16e1bc3ff5ee7f4ff1598c8d15eb0ea152
      })
      .catch((err) => {
        console.log("문제발생", err.response.data);
      });
  }
  return (
    <>
      <div className="card">
        <header>
          <Profile iconSize="medium" storyBorder={storyBorder}/>
          <CardButton className="cardButton" />
        </header>
        <img
          className="cardImage"
          src={image}
          alt="card content"
          onClick={handleOpen}
        />

        {/* 게시글 내용 */}
        <Post bd_id = {bd_id} bd_content={bd_content}></Post>
        <CardMenu />
<<<<<<< HEAD
=======
        
>>>>>>> 54c92f16e1bc3ff5ee7f4ff1598c8d15eb0ea152
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
<<<<<<< HEAD
            {comments.length}개의 댓글 {fold}
=======
            {cmt.length}개의 댓글 {fold}
>>>>>>> 54c92f16e1bc3ff5ee7f4ff1598c8d15eb0ea152
          </a>
        </div>

        {/* 댓글  */}
        <div className="comments" style={show} >
          <br></br>
          {main_cmt&&main_cmt.map((cm)=>{
            console.log(cm.cmt_content);
            if(cm.bd_seq==bd_seq){
              return(
                <Comment
                key={cm.cmt_seq}
                bd_id={cm.bd_id}
                accountName={cm.mb_id }
                comment={cm.cmt_content }
              />
              );
            }
          })  

          }
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
              onChange ={chCmt}
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
<<<<<<< HEAD
          accountName="rafagrassetti"
          storyBorder={storyBorder}
          image={image}
=======
          bd_seq={bd_seq}
          accountName="rafagrassetti"
          storyBorder={storyBorder}
          image={image}
          main_cmts={main_cmt}
>>>>>>> 54c92f16e1bc3ff5ee7f4ff1598c8d15eb0ea152
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
