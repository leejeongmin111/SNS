import "../../styles/MainSns/MainCards.scss";
import Card from "./MainCard";
import { useEffect, useState } from "react";
import axios from "axios";
import black from "../../images/blackImg.jpg";
import basic from "../../images/basicprofile.jpg";

function Cards() {
  const [postmain, setPost] = useState([]);
  const [cmts, setCmts] = useState([]);

  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/maincards", {})
      .then((res) => {
        //console.log("메인카드 들어온값 : ", res);
        setPost(res.data.post);
        setCmts(res.data.cmts);
        console.log(res.data.post);
        console.log("maincards post : ", res.data.post[0]);
      })
      .catch((err) => {
        console.log("문제발생123", err);
      });
  }, []);
  return (
    <div className="cards">
      {postmain.map(function (pos, index) {
        let imgDt;
        let profileDt;
        // 게시글에 번호에 맞는 댓글 구하기
        if (pos.img_file == null) {
          imgDt = black;
        } else {
          window.Buffer = window.Buffer || require("buffer").Buffer;
          let encode = window.Buffer.from(pos.img_file).toString("base64");
          imgDt = "data:image/png;base64," + encode;
        }
        if (pos.m_profile === null) {
          profileDt = basic;
        } else {
          window.Buffer = window.Buffer || require("buffer").Buffer;
          let encode = window.Buffer.from(pos.m_profile).toString("base64");
          profileDt = "data:image/*;base64," + encode;
        }

        return (
          <Card
            bd_id={pos.bd_id} // 글 작성자
            bd_content={pos.bd_content} // 글 내용
            bd_likes={pos.bd_likes} // 좋아요 갯수
            bd_cnt={pos.bd_cnt} // 댓글 수
            bd_seq={pos.bd_seq} // 글 번호
            storyBorder={true}
            profile={profileDt}
            image={imgDt} // 게시물 사진
            main_cmt={cmts} // 전체댓글
          />
        );
      })}
    </div>
  );
}

export default Cards;
