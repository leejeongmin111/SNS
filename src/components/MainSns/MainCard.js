import "../../styles/MainSns/MainCard.scss";
import Profile from "./MainProfile";
import { ReactComponent as CardButton } from "../../images/cardButton.svg";
import CardMenu from "./MainCardMenu";
import Comment from "./MainComment";
import {useState} from "react"
import * as React from 'react';
import { Form } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import MainImg_Click from "./MainImg_Click";


function Card(props) {
  const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
    props;
  
  //댓글 숨기기 
  const [show,setShow] = useState({display: 'none'});
  const [num, setNum] =useState(0);
  const [fold,setFold] = useState("보기")
  function changeshow(){
    if(num==0){
      setNum(num+1);
      setShow({display: 'block'});
      setFold("접기");
    }else{
      setNum(0);
      setShow({display: 'none'});
      setFold("보기");
    }
  };

  // 모달 설정 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 

  function handleSubmit (e){
    e.preventDefault();
  }


  return (
    <>
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src={image} alt="card content" onClick={handleOpen}/>
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className="timePosted">{hours} HOURS AGO <a onClick={changeshow} className="cmt_fold">{comments.length}개의 댓글 {fold}</a></div>
        


        {/* 댓글  */}
      <div className="comments" style={show}>
        <br></br>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
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
        <input type="text"  name="name" maxlength="20" size="75" placeholder="Add a commnet..." ></input>
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
          <MainImg_Click accountName="rafagrassetti"
            storyBorder={storyBorder}
            image={image}
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
