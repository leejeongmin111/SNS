import "../../styles/JobSns/JobCards.scss";
import Card from "./JobCard";
import Profile from "./JobProfile";
import { ReactComponent as CardButton } from "../../images/cardButton.svg";
import CardMenu from "./JobCardMenu";
import Comment from "./JobComment";
import { useState , useEffect} from "react";
import * as React from "react";
import { Form } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import JobImg_Click from "./JobImg_Click";
import axios from "axios";
import Post from "./JobPost";

function Cards() {

  // 객체로 받아옴
  const [post,setPost] = useState([]);
  const [cmts,setCmts] = useState([]);
  

  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/jobcards", {})
      .then((res) => {
        //console.log("글내용" + res.data.post[0].bd_id);
        console.log(res.data.cmts);
        // setEmail(res.data.email);
        // setContent(res.data.content);
        setPost(res.data.post);
        setCmts(res.data.cmts);
        console.log(cmts)
      })
      .catch((err) => {
        console.log("문제발생", err.response.data);
      });
  },[]);

  const commentsOne = [
    {
      user: "raffagrassetti",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "therealadamsavage",
      text: "Like!",
      id: 2,
    },
    {
      user: "mapvault",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "mapvault",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "dadatlacak",
      text: "Love this!",
      id: 5,
    },
  ];

  return (
    <div className="cards">
      <Card
        accountName="rafagrassetti"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      />
      {/* <Card
        accountName="mapvault"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="therealadamsavage"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="dadatlacak"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="mapvault"
        likedByNumber={90}
        hours={4}
      /> */}
    { post.map(function(pos){
        console.log("Test")
        // 게시글에 번호에 맞는 댓글 구하기 
        return(
        <Card
          key={pos.bd_seq}
          bd_id={pos.bd_id}               // 글 작성자
          bd_content = {pos.bd_content}   // 글 내용
          bd_seq = {pos.bd_seq}           // 글 번호 
          bd_likes ={pos.bd_likes}        // 좋아요 갯수
          bd_time ={pos.bd_time}          // 글 작성일 
          storyBorder={true}
          image ={"https://picsum.photos/800/1000"}
          comments ={commentsTwo}
          main_cmt = {cmts}
          likedByText= "mapvault"
          likedByNumber ={90}
          hours ={4}
        />
        );
      })}
    </div>
  );
}

export default Cards;