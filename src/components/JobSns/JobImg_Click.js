import { Box } from "@mui/system";
import "../../styles/JobSns/JobImg_Click.scss"
import Comment from "./JobComment";
import Button from "@mui/material/Button";
import CardMenu from "./JobCardMenu";
import { useState } from "react";
import axios from "axios";


// box 스타일 설정
 const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height:800,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
  };
  

function JobImg_Click(props){
const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
    props;

function handleSubmit (e){
    e.preventDefault();
    }

    return(
        <>
        <Box sx={style} className='img_click_main'>
            <img src={image} className="img_click"></img>
            <Box className='click_box1'>게시글 내용들</Box>
            <Box className='click_box2'>
            <CardMenu></CardMenu>
                {/* 댓글  */}
                <div className="comments">
                    <br></br>
                    {comments.map((comment) => {
                        return (
                            <Comment
                                key={comment.id}
                                accountName={comment.user}
                                comment={comment.text}
                            />
                            );
                            })}
                </div> 
                <Box
                  className="input_comment"
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1, marginTop: 0 }}
                  >
                  {/* 댓글 입력 창 */}
                  <input type="text" name="name" maxlength="20" size="60" placeholder="Add a commnet..." className="img_click_input"></input>
                  <Button type="submit">post</Button>
                </Box>
            </Box>
        </Box>
        </>
    );
}
export default JobImg_Click;

const { storyBorder, image, main_cmts, bd_seq, comments, likedByText, likedByNumber, hours } =
    props;
const [email] = useState(sessionStorage.getItem("email"));
const [comment, setComment] = useState("");

function handleSubmit(e) {
    e.preventDefault();

    console.log("댓글js파일");
    axios
      .post("http://127.0.0.1:3001/comment", {
        email: email,
        comment: comment,
      })
      .then((res) => {
        console.log("기철기철 " + res.data.send);
        window.location.href = "/mainsns";
      })
      .catch((err) => {
        console.log("문제발생", err.response.data);
      });
  }

  return (
    <>
      <Box sx={style} className="img_click_main">
        <img src={image} className="img_click"></img>
        <Box className="click_box1">게시글 내용들</Box>
        <Box className="click_box2">
          <CardMenu></CardMenu>
          {/* 댓글  */}
          <div className="comments">
            <br></br>
            {main_cmts&&main_cmts.map((cm)=>{
            console.log(cm.cmt_content);
            if(cm.bd_seq==bd_seq){
              return(
                <Comment
                key={cm.cmt_seq}
                bd_id={cm.bd_id}
                accountName={cm.mb_id }
                comment={cm.cmt_content }
              />
              );
            }
          })  

          }
          </div>
          <Box
            className="input_comment"
            component="form"
            noValidate
            sx={{ mt: 1, marginTop: 0 }}
            onSubmit={handleSubmit}
          >
            {/* 댓글 입력 창 */}
            <input
              type="text"
              name="name"
              maxlength="20"
              size="60"
              placeholder="Add a commnet..."
              className="img_click_input"
              onChange={(e) => setComment(e.target.value)}
            ></input>
            <Button type="submit">post</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default JobImg_Click;
