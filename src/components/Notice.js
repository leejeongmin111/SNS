import "../styles/Notice.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function Notice() {
  const [email] = useState(sessionStorage.getItem("email"));
  const [commet, setCommet] = useState("");
  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/notice", {
        id: email,
      })
      .then((data) => {
        setCommet(data.data);
        console.log("commet값 : " + commet);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div
        className="scroll_notice"
        onClick={() => {
          console.log(commet.comment[0].n_comment);
        }}
      >
        {commet.comment &&
          commet.comment.map(function (cm, index) {
            return <h2 key={index}>{cm.n_comment}</h2>;
          })}
      </div>
    </>
  );
}

export default Notice;
