import { configureStore, createSlice } from "@reduxjs/toolkit";

const firstSlice = createSlice({
    name:"firstStore",
    initialState:{
        firstInputValue1:0,
        secondInputValue1:0,
        buttonOff:true
    },
    reducers:{
        setFirstInputValue1: (state,action)=>
        {
           state.firstInputValue1 =action.payload;
           //console.log("1st  value : ",state.firstInputValue1);
        },
        setSecondInputValue1: (state,action)=>
        {
           state.secondInputValue1 =action.payload;
           //console.log("2nd  value : ",state.secondInputValue1);
        },
        setButtonOff: (state,action)=>
        {
           state.buttonOff =action.payload;
           console.log("state  value : ",state.buttonOff);
        }
     
    }
});

export const {setFirstInputValue1,setSecondInputValue1,setButtonOff} = firstSlice.actions;


//firstSlice.actions;
const firstStoreReducer =  firstSlice.reducer;


export default configureStore({
    reducer:{firstStore:firstStoreReducer}
});