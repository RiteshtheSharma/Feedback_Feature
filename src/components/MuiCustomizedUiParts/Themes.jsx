import { createTheme } from "@mui/material";

const safeTheme = createTheme({
  palette: {
    background: {
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
  },
  shape: {
    borderRadius: 4,
  },
  shadows: ['none'], // Adjusted global shadow effect
  spacing: 8,
});


  export {safeTheme}