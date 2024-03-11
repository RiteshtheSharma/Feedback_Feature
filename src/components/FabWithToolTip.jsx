
import Fab from '@mui/material/Fab';
import EditNoteIcon from "@mui/icons-material/EditNote";
import { LightTooltip } from './MuiCustomizedUiParts/CustomizedComponent';

const FabWithToolTip = ({tooltipTitle}) => {
  return (
    <LightTooltip title={tooltipTitle} className="fabPermanentToolTip" open={true} placement="top-start">
    <Fab color="primary" aria-label="add" sx={{borderRadius:"50%",width:"40px",height:"40px",background:"white",color:"black"}} >
    <EditNoteIcon sx={{ color: "white", background: "black" }} />
  </Fab>
  </LightTooltip>
  )
}

export default FabWithToolTip



