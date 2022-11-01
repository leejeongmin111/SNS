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
  const [imgSrc, setimgSrc] = useState("");
  const srcChange = (e) => {
    setimgSrc(URL.createObjectURL(e.target.files[0]));
  };

  const deleteSrc = () => {
    URL.revokeObjectURL(imgSrc);
    setimgSrc("");
  };

  const handleChange = (e) => {};

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     await axios
  //       .post("", {
  //       })
  //       .then((res) => {
  //         console.log("문제없음", res);
  //       })
  //       .catch(() => {
  //         console.log("문제발생");
  //       });
  //   };

  return (
    <div>
      <Button onClick={handleOpen}>Job_Sns</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          component="form"
          //onSubmit={handleChange}
          // action 여기다가 주소 값 입력 해주세영~~!~!~!
        >
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
                fullWidth
              />
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 50 }}>
            <Button type="submit" variant="outlined" className="daily_button">
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
