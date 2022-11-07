import "../../styles/MainSns/MainProfileIcon.scss";

function ProfileIcon(props) {
  const { iconSize, storyBorder, image } = props;

  return (
    <div className={storyBorder ? "storyBorder" : ""}>
      <img
        width={80}
        className={`profileIcon ${iconSize}`}
        src={image}
        alt="profile"
      />
    </div>
  );
}

export default ProfileIcon;
