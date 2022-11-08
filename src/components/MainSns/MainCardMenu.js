import "../../styles/MainSns/MainCardMenu.scss";
import { ReactComponent as Inbox } from "../../images/inbox.svg";
import { ReactComponent as Comments } from "../../images/comments.svg";
import { ReactComponent as Notifications } from "../../images/notifications.svg";
import { ReactComponent as Bookmark } from "../../images/bookmark.svg";
import { useState } from "react";

function CardMenu() {
  const [num, setNum] = useState(0);
  const [fold, setFold] = useState("보기");
  const [show, setShow] = useState({ display: "none" });
  function changeshow() {
    if (num == 0) {
      setNum(num + 1);
      setShow({ display: "block" });
      setFold("접기");
    } else {
      setNum(0);
      setShow({ display: "none" });
      setFold("보기");
    }
  }
  return (
    <div className="cardMenu">
      <div className="interactions">
        <Notifications className="icon" />
        <Comments className="icon" />
        <Inbox className="icon" />
      </div>
      <Bookmark className="icon" />
    </div>
  );
}

export default CardMenu;
