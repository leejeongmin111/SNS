import "../../styles/UserPage/UserProfileIcon.scss";

function ProfileIcon(props) {
  const { iconSize, storyBorder, image, username } = props;
  function move() {
    sessionStorage.setItem("userId", username);
    window.location.href = "/userpage";
  }

  return (
    <div className={storyBorder ? "storyBorder" : ""}>
      <img
        width={80}
        className={`profileIcon ${iconSize}`}
        src={image}
        alt="profile"
        onClick={move}
      />
    </div>
  );
}

export default ProfileIcon;
