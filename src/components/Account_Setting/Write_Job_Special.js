import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PhotoIcon from "../../Icons/PhotoIcon";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import "../../styles/Account_Setting/Write_Job_Special.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import postOff from "../../images/footer_icon/write_off.png";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Write_Special() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [imgSrc, setimgSrc] = useState("");
  const [kind, setKind] = useState("");
  const [email] = useState(sessionStorage.getItem("email"));
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const nav = useNavigate();

  const srcChange = (e) => {
    setimgSrc(URL.createObjectURL(e.target.files[0]));
  };

  const deleteSrc = () => {
    URL.revokeObjectURL(imgSrc);
    setimgSrc("");
    window.location.href = "/special";
  };

  const handleChange = (e) => {
    setKind(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:3001/write_special", {
        text: text,
        kind: kind,
        title: title,
        email: email,
      })
      .then((res) => {
        if (res.data == "인증필요") {
          alert("인증이 필요합니다.");
        }
        window.location.href = "/special";
      })
      .catch((err) => {
        console.log("문제발생", err.response.data);
      });
  };

  return (
    <div>
      <Button className="daily_img" onClick={handleOpen}>
        <img src={postOff} className="icon" style={{ marginTop: 14 }}></img>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {/* <IconButton
              aria-label="upload picture"
              component="label"
              size="large"
            >
            </IconButton> */}
            <br></br>
            <div className="special_text_box">
              <TextField
                label="Title"
                multiline
                rows={1}
                defaultValue=""
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                className="special_title"
              />

              <FormControl sx={{ width: 120 }}>
                <InputLabel>Program</InputLabel>
                <Select
                  onChange={handleChange}
                  labelId="Program"
                  id="Program"
                  value={kind}
                  label="Program"
                  name="Program"
                >
                  <MenuItem value="None">None</MenuItem>
                  <MenuItem value="Java">Java</MenuItem>
                  <MenuItem value="Python">Python</MenuItem>
                  <MenuItem value="React">React</MenuItem>
                  <MenuItem value="Html">HTML</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Post"
                multiline
                rows={13}
                defaultValue=""
                name="text"
                onChange={(e) => setText(e.target.value)}
                fullWidth
              />
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 50 }}>
            <Button
              type="submit"
              variant="outlined"
              className="special_daily_button"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button variant="outlined" onClick={deleteSrc}>
              Cancle
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
