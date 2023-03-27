import "../../styles/JobSns/JobCards.scss";
import Card from "./JobCard";
import Profile from "./JobProfile";
import { ReactComponent as CardButton } from "../../images/cardButton.svg";
import CardMenu from "./JobCardMenu";
import Comment from "./JobComment";
import { useState, useEffect } from "react";
import * as React from "react";
import { Form } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import JobImg_Click from "./JobImg_Click";
import axios from "axios";

import black from "../../images/blackImg.jpg";
import basic from "../../images/basicprofile.jpg";

function Cards() {
  // 객체로 받아옴
  const [post, setPost] = useState([]);
  const [cmts, setCmts] = useState([]);

  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/jobcards", {})
      .then((res) => {
        setPost(res.data.post);
        setCmts(res.data.cmts);
        console.log(cmts);
      })
      .catch((err) => {
        console.log("문제발생", err.response.data);
      });
  }, []);

  return (
    <div className="cards">
      {post.map(function (pos, index) {
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
            key={pos.bd_seq}
            bd_id={pos.bd_id} // 글 작성자
            mb_nick={pos.mb_nick}
            bd_content={pos.bd_content} // 글 내용
            bd_seq={pos.bd_seq} // 글 번호
            bd_likes={pos.bd_likes} // 좋아요 갯수
            bd_time={pos.bd_time} // 글 작성일
            bd_cnt={pos.bd_cnt}
            storyBorder={true}
            profile={profileDt}
            image={imgDt}
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
