import "../../styles/Special/SComment.scss";

function Comment(props) {
  const {
    bd_seq, // 원글 번호
    content, // 댓글 내용
    accountName, // 댓글 작성자
    comment,
  } = props;
  const Item = ({ text }) => {
    return <p>{text}</p>;
  };
  return (
    <div className="commentContainer">
      <div className="accountName">{accountName}</div>
      {<Item text={"\n"}></Item>}
      <div className="comment">{content}</div>
    </div>
  );
}

export default Comment;
