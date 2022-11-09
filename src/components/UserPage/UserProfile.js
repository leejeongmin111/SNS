import "../../styles/UserPage/UserProfile.scss";
import ProfileIcon from "./UserProfileIcon";
import { useState } from "react";
import axios from "axios";

function Profile(props) {
  const [email] = useState(sessionStorage.getItem("email"));
  const { iconSize, storyBorder, hideAccountName, image, username, urlText } =
    props;
  let accountName = email;

  function followClick() {
    axios
      .post("http://127.0.0.1:3001/follow", {
        email: email,
        username: username,
      })
      .then((res) => {
        console.log("follow로 값넘어가기", res);
      })
      .catch((err) => {
        console.log("follow페이지 문제", err);
      });
  }

  return (
    <div className="profile">
      <ProfileIcon
        iconSize={iconSize}
        storyBorder={storyBorder}
        image={image}
        username={username}
      />
      {accountName && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName">{username}</span>
        </div>
      )}
      <a href="/mainsns" onClick={followClick}>
        {urlText}
      </a>
    </div>
  );
}

export default Profile;
