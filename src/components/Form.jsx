import { useRef,useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setopen,
  setdirection,
  unselectItem,
} from "../store/slices/SpeedDialSlice";

import SelectorElem from "./SelectorElem";
import TextAreaElem from "./TextAreaElem";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";


const Form = ({MainHead,MainElem,setformWidth}) => {


  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(unselectItem());
    dispatch(setdirection("up"));
    dispatch(setopen(false));
  };

   
  const cardRef = useRef(null);

  useLayoutEffect(()=>{
   setformWidth(cardRef.current.offsetHeight);
  },[MainHead,MainElem])



  return (
    <>
      
        <Card
        ref={cardRef}
        sx={{
          width: {md:400,xs:"100%"},
          position: "absolute",
          bottom: {md:"107px",xs:0},
          right: {md:"46px",xs:0},
          borderRadius:{md:"initial",xs:"26px 26px 0 0"}
        }}
      >
        <CardContent>
          {MainHead}
          <Divider
            sx={{ borderBottomWidth: 2, marginBottom: "20px" }}
          ></Divider>

      { MainElem }
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "5px",
          }}
        >
          <Button
            size="small"
            variant="contained"
            sx={{
              padding: "2px 15px",
              backgroundColor: "black",
              textTransform: "capitalize",
            }} 
            onClick={onButtonClick}
          >
            Submit
          </Button>
        </CardActions>
      </Card>


    </>
  );
};

export default Form;
