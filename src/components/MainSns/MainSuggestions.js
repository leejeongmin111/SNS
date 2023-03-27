import "../../styles/MainSns/MainSuggestions.scss";
import Profile from "./MainProfile";
import axios from "axios";
import { useState, useEffect } from "react";
import basic from "../../images/basicprofile.jpg";

function Suggestions() {
  const [dbInfo, setDbInfo] = useState([]);

  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/suggestion", {})
      .then((res) => {
        console.log("suggestion 페이지 : ", res.data);
        setDbInfo(res.data.dbInfo);
      })
      .catch((err) => {
        console.log("수정 시작 문제");
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
          console.log("메인서제션 basic값 들어감", info.m_profile);
        } else {
          window.Buffer = window.Buffer || require("buffer").Buffer;
          let encode = window.Buffer.from(info.m_profile).toString("base64");
          imgDt = "data:image/png;base64," + encode;
          console.log(imgDt);
          console.log("메인서제션 원래있는 값 들어감", info.m_profile);
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
