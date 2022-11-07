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
        console.log("일단 여기 수정 시작", res.data.dbInfo[0].mb_profile);
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
        if (info.mb_profile === null) {
          info.mb_profile = basic;
        }
        return (
          <Profile
            iconSize="medium"
            captionSize="small"
            urlText="Follow"
            storyBorder={true}
            username={info.mb_id}
            image={info.mb_profile}
          />
        );
      })}
    </div>
  );
}

export default Suggestions;
