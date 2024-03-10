import { useState,useEffect } from "react";

import Box from "@mui/material/Box";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import EditNoteIcon from "@mui/icons-material/EditNote";


import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedItemName,
  unselectItem,
} from "../store/slices/SpeedDialSlice";
import { setopen } from "../store/slices/SpeedDialSlice";
import { setdirection } from "../store/slices/SpeedDialSlice";

import {
  LightTooltip,
  StyledSpeedDial,
  SpeedDialActionToolTip,
} from "./MuiCustomizedUiParts/CustomizedComponent";
import { safeTheme } from "./MuiCustomizedUiParts/Themes";

import { useTheme, ThemeProvider } from "@emotion/react";

export default function SpeedDialComp({actions}) {

  
  const dispatch = useDispatch();
  const theme = useTheme();


  const open = useSelector((state) => state.speedDial.open);
  const direction = useSelector((state) => state.speedDial.direction);
  const selectedSpeedDialItemName = useSelector(
    (state) => state.speedDial.selectedItemName
  );

  const setSpeedDialOpen = (val) => dispatch(setopen(val));
  const setSpeedDialDirection = (direction) =>
    dispatch(setdirection(direction));
  const setItemName = (itemName) => dispatch(setSelectedItemName(itemName));
  const unselectItemName = () => dispatch(unselectItem());

  const [SpeedDialToolTipMsg, setSpeedDialToolTipMsg] = useState(undefined);

  const onSpeedDialClick = () => {
    setSpeedDialOpen(!open);
    unselectItemName();
    setSpeedDialDirection("up");
  };
  const onSpeedDialCompItemClick = () => {
    setSpeedDialDirection("left");
  };

  useEffect(() => { let timeOutId
if(SpeedDialToolTipMsg && direction==="up")
   timeOutId = setTimeout(()=>setSpeedDialToolTipMsg(undefined),500)
  
    return () => {
      clearTimeout(timeOutId)
    }
  }, [open,SpeedDialToolTipMsg])





  return (
    <ThemeProvider theme={safeTheme}>
      <Box
        sx={{
          transform: "translateZ(0px)",
          flexGrow: 0.5,
          position: "absolute",
          bottom: { md: "32px", xs: "24px" },
          right: { md: "32px", xs: "24px" },
          color: "#0F0F0F",
        }}
      >
        <Box sx={{ position: "relative", mt: 3, color: "#0F0F0F" }}>
          <StyledSpeedDial
          mask
            ariaLabel="Floating Action Button"
            open={open }
            icon={
              open ? (
                <SpeedDialIcon sx={{ color: "black" }} />
              ) : (
                <EditNoteIcon sx={{ color: "white", background: "black" }} />
              )
            }
            direction={direction}
            onClick={onSpeedDialClick}
            onClose={() => setSpeedDialOpen(open)}
            FabProps={{
              sx: {
                bgcolor: "#F8F8F8",

                height: "40px",
                width: "40px",
                "&:hover": {
                  bgcolor: "#F8F8F8",

                  height: "40px",
                  width: "40px",
                },
              },
            }}
          >
       { actions.map((action) => (
      <SpeedDialAction
        sx={{
          color: "#0F0F0F",
          "&:active":
            direction === "left"
              ? {
                  outline: "4px solid #808080",
                  border: "7px solid transparent",
                }
              : {},
        }}
        key={action.name}
        icon={action.icon}
        tooltipOpen={
          direction === "up" &&
          open &&
          selectedSpeedDialItemName === undefined
        }
        tooltipTitle={
          direction === "up" &&
          open &&
          selectedSpeedDialItemName === undefined && (
            <SpeedDialActionToolTip theme={theme}>
              {action.name}
            </SpeedDialActionToolTip>
          )
        }
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setItemName(action.name);
          setSpeedDialToolTipMsg(action.endMsg);
          onSpeedDialCompItemClick();
        }}
      />
    ))
    }
          </StyledSpeedDial>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
