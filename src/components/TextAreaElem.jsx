import { FormControl,Typography,TextField } from "@mui/material"

const TextAreaElem = ({label,placeholder, AttachmentComp}) => {
  return (
<FormControl fullWidth sx={{marginTop:"20px"}}>
    <Typography sx={{ mb: 1.5 }} >
      {label}
    </Typography> 

     <TextField  
      multiline
      rows={4}
      InputProps={{
        placeholder: placeholder,

        startAdornment: (
        AttachmentComp
        ),
      }}

      fullWidth
     />
         </FormControl> 
  )
}
TextAreaElem.defaultProps= {
  label:"",
  placeholder:"",
  AttachmentComp:(<></>)
}
export default TextAreaElem