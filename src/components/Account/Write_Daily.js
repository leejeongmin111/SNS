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
import "../../styles/Account/Write_Daily.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

export default function Write_Daily() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [text, setText] = useState("");
  const [imgSrc, setimgSrc] = useState("");
  const email = useSelector((state) => state.email);
  const srcChange = (e) => {
    setimgSrc(URL.createObjectURL(e.target.files[0]));
  };

  const deleteSrc = () => {
    URL.revokeObjectURL(imgSrc);
    setimgSrc("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:3001/write_daily", {
        text: text,
        img: imgSrc,
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        // 값은 받아와지는데 페이지 이동이 안됨
        window.location.href = "/mainsns";
      })
      .catch((err) => {
        console.log("문제발생", err.response.data);
      });
  };

  return (
    <div>
      <Button onClick={handleOpen}>Daily_SNS</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <IconButton
              aria-label="upload picture"
              component="label"
              size="large"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                name="img"
                onChange={srcChange}
              />
              <PhotoIcon></PhotoIcon>
            </IconButton>
            <br></br>
            <div className="uploadbox">
              <img src={imgSrc} className="uploadimg"></img>
            </div>
            <div className="text_box">
              <TextField
                label="Post"
                multiline
                rows={16}
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
              className="daily_button"
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
