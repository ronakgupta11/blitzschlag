import { createSlice } from "@reduxjs/toolkit";
// import { SET_USER,SET_UNAUTHENTICATED,SET_AUTHENTICATED,LOADING_USER } from "../types";


const initialState = {
    events :[]
}


 export const dataSlice = createSlice({
    name:"data",
    initialState:initialState,
    reducers:{
        SET_EVENTS:(state,action)=>{
            return {
                ...action.payload
            }

        }

        




    }
 }


 )



 export const {SET_EVENTS} = dataSlice.actions
 export const selectEventsData = (state)=>state.data.events

 export default dataSlice.reducer