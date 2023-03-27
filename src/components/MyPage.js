import MYHeader from "./MyPage/MyHeader";
import Footer from "./MyPage/MyFooter";
import Profilemy from "./MyPage/MyProfilemy";
import Sidebar from "./MyPage/MySidebar";
import "../styles/MyPage.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import JobIcon from "../Icons/JobProfile";
import SaveNone from "../Icons/SaveNone";
import SnsProfile from "../Icons/SnsProfile";
import TagIcon from "../Icons/TagIcon";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useEffect, useState } from "react";
import axios from "axios";
import black from "../images/blackImg.jpg";

function MyPage() {
  const [email] = useState(sessionStorage.getItem("email"));
  const [value, setValue] = React.useState(0);
  const [post1, setPost] = useState([]);
  const [div, setDiv] = useState(0);
  const [ch, setCh] = useState(0);

  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/myPage/daily", {
        id: email,
        div: div,
        ch: ch,
      })
      .then((data) => {
        console.log(data.data.result);
        setPost(data.data.result);
        console.log(div);
      })
      .catch((err) => {
        console.log("문제가 많아~ 시험지 춰럼~" + err);
      });
  }, [ch]);

  return (
    <main>
      <div className="Myblank"></div>
      <div className="MyMy_container">
        <MYHeader />
        <React.Fragment>
          <Container>
            <Box className="Pro_box">
              <br></br>
              <Box className="pro_text">
                <Profilemy></Profilemy>
              </Box>
              <hr></hr>
              <Box className="Pro_icon">
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                  <BottomNavigationAction
                    label="Daily"
                    icon={<SnsProfile />}
                    className="icon_button"
                    onClick={() => {
                      setCh(0);
                      setDiv(0);
                    }}
                  />
                  <BottomNavigationAction
                    label="Job"
                    icon={<JobIcon />}
                    className="icon_button"
                    onClick={() => {
                      setCh(1);
                      setDiv(1);
                    }}
                  />
                  <BottomNavigationAction
                    label="Save"
                    icon={<SaveNone />}
                    className="icon_button"
                    onClick={() => {
                      setCh(2);
                      setDiv(2);
                    }}
                  />
                  <BottomNavigationAction
                    label="Tag"
                    icon={<TagIcon />}
                    className="icon_button"
                  />
                </BottomNavigation>
              </Box>
              <input type={"hidden"} name="id" value={email} />
              <br></br>
              <Grid
                container
                spacing={{ xs: 1, md: 1 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                className="Pro_gird"
              >
                {post1.map((pos, index) => {
                  let imgDt;
                  if (pos.img_file == null) {
                    imgDt = black;
                  } else {
                    window.Buffer = window.Buffer || require("buffer").Buffer;
                    let encode = window.Buffer.from(pos.img_file).toString(
                      "base64"
                    );
                    imgDt = "data:image/png;base64," + encode;
                  }
                  return (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                      <item>
                        <img src={imgDt} className="Pro_imgs"></img>
                      </item>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Container>
        </React.Fragment>
        <Footer />
      </div>
      <div className="Mybox">
        <Sidebar />
      </div>
    </main>
  );
}
export default MyPage;
