import { styled } from '@mui/material/styles';
import { SpeedDial, tooltipClasses } from '@mui/material';
import { Box } from '@mui/material';
import {Tooltip} from '@mui/material';
  const SpeedDialActionToolTip = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: "1px 2.5px",
    
    borderRadius: theme.shape.borderRadius,
    outline:"0",
    width:"max-content",
    boxShadow: theme.shadows[0],
    fontSize:"15px",
    fontWeight:"900",
    color: theme.palette.text.primary,
  }));

  const LightTooltip = styled(({ className, color,...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme,color }) => ({
    [`& .${tooltipClasses.tooltipArrow}`]: {
      backgroundColor: color,
      boxShadow: theme.shadows[1]
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 23,
    },
  }));
  

  const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: "absolute",
  
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  }));
  

export  {SpeedDialActionToolTip,StyledSpeedDial,LightTooltip}