import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PhotoIcon from '../../Icons/PhotoIcon';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import "../../styles/Account/Write_Daily.scss"




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 600,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Write_Daily() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [kind, setKind] = React.useState('');
  const [imgSrc,setimgSrc] = useState("");
  const srcChange = (e)=>{
    setimgSrc(e.target.files[0])
    console.log(e.target.files[0])
  }

  const handleChange = (e) => {
    
    }

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
        <Button onClick={handleOpen}>Daily_SNS</Button>
      
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style} 
            component="form"
            //onSubmit={handleChange}
            // action 여기다가 주소 값 입력 해주세영~~!~!~!
            >
          <Typography id="modal-modal-title" variant="h6" component="h2">


                <IconButton aria-label="upload picture" component="label" size='large'>
                    <input accept="image/*" type="file" name='img' onChange={srcChange}/>
                    <PhotoIcon></PhotoIcon>
                </IconButton>
                <Box className='uploadimg' sx={{border:1}}>
                  {imgSrc &&<img src={imgSrc}></img>}
                </Box>


            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
        
            <br></br>
            <TextField
            label="Post"
            multiline
            rows={10}
            defaultValue=""
            fullWidth
            name='text'
            />
          </Typography>
                <Button
                  type="submit"
                  variant="outlined"
                >
                  Submit
                </Button>
        </Box>
      </Modal>
    </div>
  );
}
