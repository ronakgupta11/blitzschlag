// import { SET_ERRORS,LOADING_UI,CLEAR_ERRORS } from "../types";
import { createSlice } from "@reduxjs/toolkit"
const initialState  ={
    loading:false,
    errors:{}
}

export const uiSlice = createSlice({
    name:"ui",
    initialState:initialState,
    reducers:{
        SET_ERRORS:(state,action)=>{
            return {
                ...state,
                loading:false,
                errors:action.payload
            }

        },
        CLEAR_ERRORS:(state)=>{
            return {
                ...state,
                loading:false,
                errors:{}
            }

        },
        LOADING_UI:(state)=>{
            return {
                ...state,
                loading:true,

            }

        },


    }
 }


 )



 export const {SET_ERRORS,CLEAR_ERRORS,LOADING_UI} = uiSlice.actions
 export const selectLoading = (state)=>state.ui.loading
 export const selectErrors = (state)=>state.ui.errors
 export default uiSlice.reducer

