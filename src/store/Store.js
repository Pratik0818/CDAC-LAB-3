import { configureStore, createSlice } from "@reduxjs/toolkit";

const firstSlice = createSlice({
    name:"firstStore",
    initialState:{
        firstInputValue1:0,
        secondInputValue1:0
    },
    reducers:{
        setFirstInputValue1: (state,action)=>
        {
           state.firstInputValue1 =action.payload;
           console.log("1st  value : ",state.firstInputValue1);
        },
        setSecondInputValue1: (state,action)=>
        {
           state.secondInputValue1 =action.payload;
           console.log("2nd  value : ",state.secondInputValue1);
        }
     
    }
});

export const {setFirstInputValue1,setSecondInputValue1} = firstSlice.actions;


//firstSlice.actions;
const firstStoreReducer =  firstSlice.reducer;


export default configureStore({
    reducer:{firstStore:firstStoreReducer}
});