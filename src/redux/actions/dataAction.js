// // import { SET_USER ,LOADING_USER,SET_AUTHENTICATED,SET_UNAUTHENTICATED, LOADING_UI, CLEAR_ERRORS, SET_ERRORS} from "../types"
// import { SET_USER } from "../reducers/userReducer"
// import { LOADING_UI,SET_ERRORS,CLEAR_ERRORS } from "../reducers/uiReducer"
import axios from "axios"
import { url } from "@/constants"


export const getEvents = async()=>{
    const data = await axios.get(`${url}/events`)
    return data.data
}


export const getRegisteredEventsAndTeamData = async()=>{
    const data = await axios.get(`${url}/events`)
    return data.data
}
export const getPassData = async()=>{
    const data = await axios.get(`${url}/events`)
    return data.data
}

