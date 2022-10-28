import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../images/jobsnsLogo.png";
import phone from "../../images/phone.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });

    console.log(email, pw);

    await axios
      .post("http://127.0.0.1:3001/login", {
        email: email,
        pw: pw,
      })
      .then((res) => {
        console.log("문제없음", res);
        nav("/mainsns");
      })
      .catch(() => {
        console.log("문제발생");
      });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "white",
            }}
          >
            <img src={phone} className="loginMain"></img>
            <Box
              sx={{
                marginTop: 15,
                marginRight: 500,
                marginLeft: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "centre",
              }}
            >
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                }}
              >
                <img src={logo} width="300px"></img>
              </Box>

              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1, marginTop: 4 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPw(e.target.value)}
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <br></br>

                <Link href="#" variant="body2">
                  비밀번호를 잊으셨나요?
                </Link>
                <br></br>
                <br></br>
                <Link href="#" variant="body1">
                  {"Don't have an account ?  Resgister"}
                </Link>
                <Copyright sx={{ mt: 8, mb: 4 }} />
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
