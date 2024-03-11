import { useSelector } from "react-redux";
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


const Form = ({MainHead,MainElem}) => {


  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(unselectItem());
    dispatch(setdirection("up"));
    dispatch(setopen(false));
  };








  return (
    <>
      
        <Card
        sx={{
          width: 400,
          position: "absolute",
          bottom: "107px",
          right: "46px",
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
