import { createSlice } from "@reduxjs/toolkit";
// import { SET_USER,SET_UNAUTHENTICATED,SET_AUTHENTICATED,LOADING_USER } from "../types";


const initialState = {
    authenticated :false,
    isMNIT:false,
    isCA:false,
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
            ...state,
                authenticated:true,
                ...action.payload

            }

        },
        SET_MNIT:(state)=>{
            return{
                ...state,
                isMNIT:true
            }

        },
        SET_CA:(state)=>{
return{
    ...state,
    isCA:true
}
        }




    }
 }


 )



 export const {SET_AUTHENTICATED,SET_UNAUTHENTICATED,SET_USER,SET_CA,SET_MNIT} = userSlice.actions
 export const selectAuthenticated = (state)=>state.user.authenticated
 export const selectMNIT = (state)=>state.user.isMNIT
 export const selectCA = (state)=>state.user.isCA
 export const selectCredentials = (state)=>state.user.credentials
 export const selectEvents = (state)=>state.user.registeredEventsData
export const selectTeams = (state) => state.user.registeredTeamsData
 export default userSlice.reducer