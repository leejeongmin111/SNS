import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { height } from "@mui/system";

export default function Jobcheckbox(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    props.setJob(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          직업 선택
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onClick={handleChange}
          autoWidth
          label="JOB"
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value="IT">IT</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
