// 'use client';

// import React, { useState } from 'react';
// import InputText from './FormComponents/form-components/InputText';
// import InputPass from "./FormComponents/form-components/InputPasword";
// import { useFormik } from "formik";
// import { loginSchema } from '../schemas/index2';


// import { url } from '@/constants';
// import axios from 'axios';
// import Link from 'next/link';
// import {toast} from "react-toastify"
// import { useRouter } from 'next/router';


// import { useDispatch,useSelector } from 'react-redux';
// import { selectErrors, selectLoading } from '@/redux/reducers/uiReducer';
// import { LOADING_UI,SET_ERRORS,CLEAR_ERRORS } from '@/redux/reducers/uiReducer';
// import { SET_USER } from '@/redux/reducers/userReducer';
// import { getUserData } from '@/redux/actions/userAction';


// const Login = () => {
//     const router = useRouter()
//     const initialValues = {
//         email: "",
//         password: "",
//     }
// const successLogin = () => toast("Logged in",{type:"success"});
// const successReset = () => toast("Sent Password Reset Mail",{type:"success"});
// const dispatch = useDispatch()
// const loading  = useSelector(selectLoading)
// const errorsApi = useSelector(selectErrors)

//     const { values, errors, handleChange, handleSubmit } = useFormik({
//         initialValues: initialValues,
//         validationSchema: loginSchema,
//         onSubmit: (values) => {
//             handleClick(values.email,values.password)
//         }
//     });

//     const [show, setShow] = useState(false);



//     const handleShow = () => {
//         setShow(!show);
//     }


//     const handleClick = (email,pass)=>{
    

//         const userData =  {
//             email:email,
//             password:pass
//          }     
//           dispatch(LOADING_UI())
        
//           axios.post(`${url}/login`,userData).then(
//               res =>{
//                   const BLITZID  = `Bearer ${res.data.token}`;
//                   localStorage.setItem("BLITZID",BLITZID);
//                   axios.defaults.headers.common["Authorization"] = BLITZID;
//                   getUserData().then(res=>{
//                     localStorage.setItem("BLITZUSER",res);
        
//                     dispatch(SET_USER(res))
//                   });
//                   dispatch(CLEAR_ERRORS())
//                   successLogin()
//                   router.push("/")
        
//               }
//           ).catch(
//               err=>{
//                   dispatch(
//                       SET_ERRORS(err.response.data),
        
//                   )
//               }
//           )
//         }
        
        
        
//         const handleForgot = ()=>{
//             if(!email){
//                 dispatch(SET_ERRORS({
//                   email:"Must not be empty"
//               }))
        
//             }
//             else{
//               dispatch(LOADING_UI())
//             axios.post(`${url}/resetPassword`,
//             {
//                     email:email,
        
//                  }).then(
//                 d =>
//                 {
//                   dispatch(CLEAR_ERRORS())
//                   successReset()
        
//                 }
//             ).catch(e=>{
                
//                 dispatch(SET_ERRORS(e.response.data))
//                 // setLoading(false)
//             })}
        
        
//         }

        

//     return (
//         <>
//                 <div className='contain'>
//                     <div className='switch-btw'>
//                         Login
//                     </div>
//                     <form onSubmit={handleSubmit}>
//                         <InputText title={"email"} val={values.email} setVal={handleChange}
//                             hint={"User Email"} error={errorsApi.email } />
//                         <InputPass title={"password"} val={values.password} error={errorsApi.password}
//                             setVal={handleChange} hint={"Password"} type={show ? "text" : "password"} />
//                         <div className='check-box'>
//                             <input type="checkbox" name='show' id='show' value={show} onClick={handleShow} />
//                             <label htmlFor='show'>show Password</label>
//                         </div>
//                         <div className='btn-contain'>
//                             <button type='submit' className='btn' >{loading?"Loading...":"login"}</button>
//                         </div>
//                     </form>

//                 </div>

//         </>
//     );
// }

// export default Login;