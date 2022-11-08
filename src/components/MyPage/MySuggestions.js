import "../../styles/MainSns/MainSuggestions.scss";
import Profile from "./MyProfile";
import axios from "axios";
import { useState, useEffect } from "react";
import basic from "../../images/basicprofile.jpg";

function Suggestions() {
  const [dbInfo, setDbInfo] = useState([]);

  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/suggestion", {})
      .then((res) => {
        console.log("suggestion 페이지 : ", res.data.dbInfo);
        setDbInfo(res.data.dbInfo);
      })
      .catch((err) => {
        console.log("suggestion 페이지 : ", err);
      });
  }, []);

  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions For You</div>
      </div>
      {/* 친구가 아닌 사람만 나오기 랜덤으로 5명 나오게하기 */}
      {dbInfo.map(function (info) {
        let imgDt;
        if (info.m_profile === null) {
          imgDt = basic;
          console.log("mysuggestion1 : " + imgDt);
        } else {
          window.Buffer = window.Buffer || require("buffer").Buffer;
          let encode = window.Buffer.from(info.m_profile).toString("base64");
          imgDt = "data:image/png;base64," + encode;
          console.log("mysuggestion2 : " + imgDt);
        }
        return (
          <Profile
            iconSize="medium"
            captionSize="small"
            urlText="Follow"
            storyBorder={true}
            username={info.mb_id}
            image={imgDt}
          />
        );
      })}
    </div>
  );
}

export default Suggestions;
