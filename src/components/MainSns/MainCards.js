import "../../styles/MainSns/MainCards.scss";
import Card from "./MainCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Cards() {
  // email = 작성자 아이디
  // content = 게시글 내용
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/maincards", {})
      .then((res) => {
        console.log("아이디" + res.data.email);
        console.log("글내용" + res.data.content);
        setEmail(res.data.email);
        setContent(res.data.content);
      })
      .catch((err) => {
        console.log("문제발생", err.response.data);
      });
  });

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

  // const commentsTwo = [
  //   {
  //     user: "기철기철",
  //     text: "Amazing content, keep it up!",
  //     id: 4,
  //   },
  // ];

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
        accountName={email}
        post="ggg"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText={email}
        likedByNumber={89}
        hours={16}
      />
      <Card
        post_id={email}
        post={content}
        accountName="앙기철ㄸㄸㄸㄸ"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText={email}
        likedByNumber={47}
        hours={12}
      />
      {/* <Card
        accountName="이헬창111"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="mapvault"
        likedByNumber={90}
        hours={4}
      /> */}
    </div>
  );
}

export default Cards;
