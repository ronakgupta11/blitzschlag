// // import { SET_USER ,LOADING_USER,SET_AUTHENTICATED,SET_UNAUTHENTICATED, LOADING_UI, CLEAR_ERRORS, SET_ERRORS} from "../types"
// import { SET_USER } from "../reducers/userReducer"
// import { LOADING_UI,SET_ERRORS,CLEAR_ERRORS } from "../reducers/uiReducer"
import axios from "axios"
import { url } from "@/constants"
// import { useDispatch } from "react-redux"

// const dispatch = useDispatch()

// export const loginUser = (userData,router)  =>{
//     dispatch(LOADING_UI())

//     axios.post(`${url}/login`,userData).then(
//         res =>{
//             const BLITZID  = `Bearer ${res.data.token}`;
//             localStorage.setItem("BLITZID",BLITZID);
//             axios.defaults.headers.common["Authorization"] = BLITZID;
//             getUserData();
//             dispatch(CLEAR_ERRORS())
//             router.push("/")

//         }
//     ).catch(
//         err=>{
//             dispatch(
//                 SET_ERRORS(err.response.data),

//             )
//         }
//     )
// }




export const getUserData = async()=>{

    const data = await axios.get(`${url}/user`)
    return data.data

}


export const logOutUser = ()=>{
        localStorage.removeItem("BLITZID"),
        delete axios.defaults.headers.common["Authorization"]
    
    }
