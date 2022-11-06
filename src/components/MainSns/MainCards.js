import "../../styles/MainSns/MainCards.scss";
import Card from "./MainCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Cards() {
  // const [email, setEmail] = useState("");
  // const [content, setContent] = useState("");
  // 객체로 받아옴
  const [post,setPost] = useState([]);
  const [cmts,setCmts] = useState([]);
  
  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/maincards", {})
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
      user: "앙기철ㄸㄸㄸㄸ",
      text: "아이고 여기에요 댓글넣어야하는데",
      id: 1,
    },
    {
      user: "이헬창",
      text: "Like!",
      id: 2,
    },
    {
      user: "기철킹",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "기철기철",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  // const commentsThree = [
  //   {
  //     user: "아...ㄸ기철..",
  //     text: "Love this!",
  //     id: 5,
  //   },
  // ];
  return (
    <div className="cards">
      <Card
        accountName="이헬창111"
        bd_content="ggg"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="mapvault"
        likedByNumber={89}
        hours={16}
      />
      {/* <Card
        post={post}
        post_id={email}
        ct={content}
        accountName="앙기철ㄸㄸㄸㄸ"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText={email}
        likedByNumber={47}
        hours={12}
      /> */}
      {/* <Card
        accountName="이헬창111"
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
