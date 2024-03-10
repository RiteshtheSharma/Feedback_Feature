import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Typography } from '@mui/material';
const AttachmentElem = () => {
  return (
    <IconButton component="label" sx={{position:"absolute" ,bottom:"10px",left:"10px",background:"#c7c7c7",borderRadius:"10px"}}>
    <AttachFileIcon />
    <input
      type="file"
      hidden
      onChange={()=>{}}
    />
    <Typography>Attach</Typography>
  </IconButton>
  )
}

export default AttachmentElem