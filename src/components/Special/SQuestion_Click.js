import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import "../../styles/Special/SQuestion_Click.scss"
import html_img from "../../images/Program/html.png"
import java_img from "../../images/Program/java1.png"
import python_img from "../../images/Program/python.png"
import react_img from "../../images/Program/react.png"
import { useEffect } from "react";

// 모달 창 크기 설정 
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1200,
    height: 800,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
  };

function SQuestion_Click(props){
    const { 
        bd_seq,   // 게시글 번호
        bd_title,   // 글 제목
        bd_content,// 글 내용
        bd_id,       // 글 작성자 
        bd_cnt,      // 댓글 수 
        bd_likes,   // 좋아요 수
        bd_type,
        } = props;

        const [program, setProgram] = useState();
     
        // 프로그램 종류 구하기  Java Python React Html
            useEffect(() => {
          if(bd_type=="Java"){
            setProgram(java_img)
          }else if(bd_type=="Python"){
            setProgram(python_img);
          }else if(bd_type=="React"){
            setProgram(react_img);
          }else if(bd_type=="Html"){
            setProgram(html_img);
          }else{
            setProgram("");
          }
        })

    return(
        <>
            <Box className="SQ_img_main" sx={style} >
                <img src={program} className="SQ_img_click"></img>
                <Box className = "SQ_title"><h1 align="center">{bd_title}</h1></Box>
                <Box className = "SQ_content">{bd_content}</Box>
            </Box>
        </>
    );
}
export default SQuestion_Click