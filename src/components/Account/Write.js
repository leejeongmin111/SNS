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

export default function Write() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [kind, setKind] = React.useState('');

  const [value, setValue] = React.useState('Controlled');
  const handleChange = (e) => {
    setKind(e.target.value);}

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          
          <TextField
          label="Title"
          defaultValue=""
          sx={{width:300}}
          />
          


          <FormControl sx={{width:100}}>
        <InputLabel id="demo-simple-select-label">Kind</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={kind}
          label="Age"
          onChange={handleChange}
         >
          <MenuItem value="Daily">Daily</MenuItem>
          <MenuItem value="JobSnS">JobSnS</MenuItem>
        </Select>
         </FormControl>



          <Box sx={{ minWidth: 120 }}>
         </Box>






          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>

        
          
          <br></br>
          <TextField
          label="Post"
          multiline
          rows={20}
          defaultValue=""
          fullWidth
          />

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
