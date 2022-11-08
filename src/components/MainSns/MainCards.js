import "../../styles/MainSns/MainCards.scss";
import Card from "./MainCard";
import { useEffect, useState } from "react";
import axios from "axios";
import black from "../../images/blackImg.jpg";

function Cards() {
  // const [email, setEmail] = useState("");
  // const [content, setContent] = useState("");
  // 객체로 받아옴
  const [post, setPost] = useState([]);
  const [cmts, setCmts] = useState([]);

  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/maincards", {})
      .then((res) => {
        setPost(res.data.post);
        setCmts(res.data.cmts);
        console.log(res.data.post);
        console.log(post);
      })
      .catch((err) => {
        console.log("문제발생123", err);
      });
  }, []);
  return (
    <div className="cards">
      {post.map(function (pos, index) {
        let imgDt;
        // 게시글에 번호에 맞는 댓글 구하기
        if (pos.img_file == null) {
          imgDt = black;
        } else {
          window.Buffer = window.Buffer || require("buffer").Buffer;
          let encode = window.Buffer.from(pos.img_file).toString("base64");
          imgDt = "data:image/png;base64," + encode;
        }
        return (
          <Card
            key={pos.bd_seq}
            bd_id={pos.bd_id} // 글 작성자
            bd_content={pos.bd_content} // 글 내용
            bd_seq={pos.bd_seq} // 글 번호
            bd_likes={pos.bd_likes} // 좋아요 갯수
            bd_time={pos.bd_time} // 글 작성일
            bd_cnt={pos.bd_cnt} // 댓글 수
            storyBorder={true}
            image={imgDt} // 게시글 이미지
            main_cmt={cmts}
            likedByText="mapvault"
            likedByNumber={90}
            hours={4}
          />
        );
      })}
    </div>
  );
}

export default Cards;
