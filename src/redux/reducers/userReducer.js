import { createSlice } from "@reduxjs/toolkit";
// import { SET_USER,SET_UNAUTHENTICATED,SET_AUTHENTICATED,LOADING_USER } from "../types";


const initialState = {
    authenticated :false,
    credentials:{}, 
    registeredEvents:[]
}


 export const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        SET_AUTHENTICATED:(state)=>{
            return {
                ...state,
                authenticated:true
            }

        },
        SET_UNAUTHENTICATED:(state)=>{
            return {
                ...state,
                authenticated :false,
                credentials:{}, 
                registeredEvents:[]
            }

        },
        SET_USER:(state,action)=>{
            
            return {
            
                authenticated:true,
                ...action.payload

            }

        },




    }
 }


 )



 export const {SET_AUTHENTICATED,SET_UNAUTHENTICATED,SET_USER} = userSlice.actions
 export const selectAuthenticated = (state)=>state.user.authenticated

 export default userSlice.reducer