import {createSlice} from '@reduxjs/toolkit';


const FormSlice = createSlice({name:"display",
initialState:{value:'none'},
reducers :{
set(state,action){
state.value = action.payload 
},

}
,
    

}) 
console.log(FormSlice.actions);
export {FormSlice};
// export default userSlice.reducer /* to avoid writting .reducer in store  
export const {set} = FormSlice.actions;

