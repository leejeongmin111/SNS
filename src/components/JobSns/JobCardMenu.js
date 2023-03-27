import "../../styles/JobSns/JobCardMenu.scss";
import { ReactComponent as Comments } from "../../images/comments.svg";
import { ReactComponent as Notifications } from "../../images/notifications.svg";
import { ReactComponent as Bookmark } from "../../images/bookmark.svg";
import axios from "axios";
import { useState } from "react";
function CardMenu(props) {
  const {
    bd_content, // 글내용
    bd_id, // 글 작성자
    bd_likes, // 좋아요수
    bd_cnt, // 댓글 갯수
    main_cmts, //댓글 객체
    storyBorder,
    image,
    bd_seq,
    comments,
  } = props;
  const [email] = useState(sessionStorage.getItem("email"));
  const [nick] = useState(sessionStorage.getItem("nick"));
  const [likeId, setLikeId] = useState("");
  const [likeNick, setLikeNick] = useState("");
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
        bd_seq: bd_seq,
        id: email,
      })
      .then((res) => {
        if (res.data.result == "성공") {
          console.log("좋아요 완료 : " + res.data.nick);
          alert("좋아요 완료");
          setLikeId(res.data.id);
          setLikeNick(res.data.nick);
        } else {
          alert("좋아요 삭제");
          setLikeId(email);
          setLikeNick(nick);
        }
      })
      .catch((err) => {
        console.log("좋아요 안됨!!!" + err);
      });
  }
  return (
    <div className="cardMenu">
      <div className="interactions">
        <Notifications className="icon" onClick={likeBt} />
        <Comments className="icon" />
      </div>
      <Bookmark className="icon" onClick={save} />
    </div>
  );
}

export default CardMenu;
