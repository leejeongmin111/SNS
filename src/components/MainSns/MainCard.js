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




function Card(props) {
  const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
    props;
  
  const [hidden,setHidden] = useState("")

  function handleSubmit (e){
    e.preventDefault();
  }


  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className="comments">
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
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">



      <div className="comments">
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

      <Box
        visibility = "{hidden}"
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
  );
}

export default Card;
