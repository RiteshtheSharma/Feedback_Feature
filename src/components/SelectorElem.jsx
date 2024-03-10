import FormControl from "@mui/material/FormControl";
import Autocomplete from '@mui/material/Autocomplete';
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TextField from "@mui/material/TextField";
const SelectorElem = ({label,options}) => {
  return (
    <FormControl fullWidth>
    <Typography sx={{ mb: 1.5 }} >
      {label}
    </Typography> 

    <Autocomplete
popupIcon={<KeyboardArrowDownIcon  />}
options={options}
fullWidth
size="small"
renderInput={(params) => <TextField {...params}  />}
/>
         </FormControl> 
  )
}

export default SelectorElem