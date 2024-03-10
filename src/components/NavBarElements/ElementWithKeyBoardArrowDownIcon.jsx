import { Box, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const ElementWithKeyBoardArrowDownIcon = ({heading}) => {
  return (
    <Box sx={{margin:"auto 0",display:"flex",flexDirection:"row",color:{md: "#868686" ,xs:"black"}  }}> 
    <Typography
       variant="h6"
       noWrap
       component="p"
       sx={{margin:"auto 0"}}
     >
       {heading}
     </Typography>
     <IconButton
       size="large"
       edge="end"
       aria-label="account of current user"
       aria-haspopup="true"
       sx={{display:"inline-block",margin:"auto 0",padding:"0"}}
       color="inherit"
       
     >
     <KeyboardArrowDownIcon/>
     </IconButton>
     
     
     
     
     </Box>
  );
};

export default ElementWithKeyBoardArrowDownIcon; 


