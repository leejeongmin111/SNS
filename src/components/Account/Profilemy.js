import "../../styles/Account/Profilemy.scss";
import ProfileIcon from "../JobSns/ProfileIcon";
import users from "../../data/users";
import Setting from "../../Icons/Setting";


function Profilemy(props) {
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideAccountName,
    image,
  } = props;

  let accountName = username
    ? username
    : users[Math.floor(Math.random() * users.length)].username;

  return (
    <div className="profile">
      <ProfileIcon
        iconSize={iconSize}
        storyBorder={storyBorder}
        image={image}
      />
      {(accountName || caption) && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName">{accountName}&nbsp;&nbsp;&nbsp;</span>
          <span className={`caption ${captionSize}`}>{caption}</span>
          
        </div>
      )}
      <a href="/">{urlText}</a>
    </div>
  );
}

export default Profilemy;
