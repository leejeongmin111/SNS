import Header from "./UserPage/UserHeader";
//import Footer from "./UserPage/UserFooter";
import Footer from "./MyPage/MyFooter";
import Profilemy from "./UserPage/UserProfilemy";
import Sidebar from "./UserPage/UserSidebar";
import "../styles/UserPage.scss";

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
  const [userId] = useState(sessionStorage.getItem("userId"));
  const [value, setValue] = React.useState(0);
  const [post1, setPost] = useState([]);

  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/userpage", {
        id: userId,
      })
      .then((data) => {
        console.log(data.data.result);
        setPost(data.data.result);
      })
      .catch((err) => {
        console.log("문제가 많아~ 시험지 춰럼~" + err);
      });
  }, []);

  return (
    <main>
      <div className="blank"></div>
      <div className="userMy_container">
        <Header />
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
                  />
                </BottomNavigation>
              </Box>
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
                    <Grid
                      item
                      xs={2}
                      sm={4}
                      md={4}
                      key={index}
                      className="img_grid_box"
                    >
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
      <div className="box_user">
        <Sidebar />
      </div>
    </main>
  );
}
export default MyPage;
