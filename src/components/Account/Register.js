// import * as React from "react";
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Jobcheckbox from "./Jobcheckbox";
import Logo from "../../images/jobsnsLogo.png";
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

export default function Register() {
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");
  const [rn, setRn] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, pw, name, nick, rn, phone, gender, job);
    await axios
      .post("http://127.0.0.1:3001/register", {
        email: email,
        pw: pw,
        name: name,
        nick: nick,
        rn: rn,
        phone: phone,
        gender: gender,
        job: job,
      })
      .then((res) => {
        console.log("문제없음", res);
        nav("/");
      })
      .catch((err) => {
        console.log("문제발생", err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <br></br>
          <img src={Logo} width="300px"></img>
          <Typography component="h1" variant="h5"></Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPw(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  onChange={(e) => setName(e.target.value)}
                  label="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="nick"
                  required
                  fullWidth
                  id="NickName"
                  onChange={(e) => setNick(e.target.value)}
                  label="NickName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="human_number"
                  required
                  fullWidth
                  id="human_number"
                  onChange={(e) => setRn(e.target.value)}
                  label="주민번호"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="phone_number"
                  required
                  fullWidth
                  id="phone_number"
                  onChange={(e) => setPhone(e.target.value)}
                  label="phone_number"
                />
              </Grid>

              <FormControl marginTop="50">
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel
                    value="F"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="M"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <Jobcheckbox setJob={setJob}></Jobcheckbox>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
