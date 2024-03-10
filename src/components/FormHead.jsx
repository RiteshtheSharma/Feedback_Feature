import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const FormHead = ({startingText,boldingText,midText,endingText}) => {
    const Color = "#4d4d4d";
    return (
    <Box sx={{ margin: "15px auto" }}>
    <Typography
      variant="h6"
      sx={{ color: Color, lineHeight: "10px", fontWeight: "800" }}
      align="center"
    >
      {startingText}
      <strong style={{ color: "black" }}> {boldingText}</strong>
      {midText}
    </Typography>
    <Typography
      sx={{ color: Color, fontWeight: "800" }}
      variant="h6"
      align="center"
    >
      {endingText}
    </Typography>
  </Box>
  )
}

export default FormHead