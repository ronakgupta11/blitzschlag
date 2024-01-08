import { createSlice } from "@reduxjs/toolkit";
// import { SET_USER,SET_UNAUTHENTICATED,SET_AUTHENTICATED,LOADING_USER } from "../types";


const initialState = {
    authenticated :false,
    credentials:{}, 
    registeredEventsData:[],
    registeredTeamsData:[],
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
            return initialState

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
 export const selectCredentials = (state)=>state.user.credentials
 export const selectEvents = (state)=>state.user.registeredEventsData
export const selectTeams = (state) => state.user.registeredTeamsData
 export default userSlice.reducer