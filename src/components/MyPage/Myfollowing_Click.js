import Profile from "./MyProfile";
import photo from "../../images/basicprofile.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

function Myfollowing_Click() {
  const [Info, setInfo] = useState([]);
  const [email] = useState(sessionStorage.getItem("email"));

  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/followingClick", {
        email: email,
      })
      .then((res) => {
        console.log("folloClick 결과값 : ", res.data.info);
        setInfo(res.data.info);
      })
      .catch((err) => {
        console.log("folloClick끝내기 실패", err);
      });
  }, []);

  return (
    <>
      {Info.map((props) => {
        let imgDt;
        if (props.profile === null) {
          imgDt = photo;
        } else {
          window.Buffer = window.Buffer || require("buffer").Buffer;
          let encode = window.Buffer.from(props.profile).toString("base64");
          imgDt = "data:image/png;base64," + encode;
        }
        return <Profile username={props.id} image={imgDt}></Profile>;
      })}
    </>
  );
}
export default Myfollowing_Click;
