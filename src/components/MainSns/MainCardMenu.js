import "../../styles/MainSns/MainCardMenu.scss";
import { ReactComponent as Comments } from "../../images/comments.svg";
import { ReactComponent as Notifications } from "../../images/notifications.svg";
import { ReactComponent as Bookmark } from "../../images/bookmark.svg";
import axios from "axios";
import { useState } from "react";
function CardMenu(props) {
  const { bd_seq } = props;
  const [email] = useState(sessionStorage.getItem("email"));
  // 좋아요 버rrrrrr튼
  function likeBt() {
    axios
      .post("http://127.0.0.1:3001/likeIn", {
        bd_seq: bd_seq,
        id: email,
      })
      .then((res) => {
        if (res.data.result == "성공") {
          alert("좋아요 완료");
        } else {
          alert("좋아요 삭제");
        }
      })
      .catch((err) => {
        console.log("좋아요 안됨!!!" + err);
      });
  }
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
