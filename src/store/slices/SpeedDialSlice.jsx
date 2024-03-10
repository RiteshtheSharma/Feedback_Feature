import {createSlice} from '@reduxjs/toolkit';


const SpeedDialSlice = createSlice({name:'SpeedDialSlice',
initialState:{open:false,direction:'up',selectedItemName:undefined},
reducers :{
setopen(state,action){
state.open = action.payload 
},
setdirection(state,action){
    state.direction = action.payload 
    }, 
setSelectedItemName(state,action){

    state.selectedItemName = action.payload
} ,
unselectItem(state){
    state.selectedItemName = undefined;
}
}
,
    

}) 

export {SpeedDialSlice};
// export default userSlice.reducer /* to avoid writting .reducer in store  
export const {setopen} = SpeedDialSlice.actions; 
export const {setdirection} = SpeedDialSlice.actions; 
export const {unselectItem} = SpeedDialSlice.actions;
export const {setSelectedItemName} = SpeedDialSlice.actions;
