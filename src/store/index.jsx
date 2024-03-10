import { configureStore } from "@reduxjs/toolkit";
import { FormSlice } from "./slices/FormSlice";
import { SpeedDialSlice } from "./slices/SpeedDialSlice";
const store = configureStore({

    reducer:{
     form:FormSlice.reducer,
     speedDial: SpeedDialSlice.reducer
     
    },
    
},) 
export default store;