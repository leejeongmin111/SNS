import "../../styles/MyPage/MyProfileIcon.scss";

function ProfileIcon(props) {
  const { iconSize, storyBorder, image } = props;

  let profileImage = image;

  return (
    <div className={storyBorder ? "storyBorder" : ""}>
      <img
        width={80}
        className={`profileIcon ${iconSize}`}
        src={profileImage}
        alt="profile"
      />
    </div>
  );
}

export default ProfileIcon;
