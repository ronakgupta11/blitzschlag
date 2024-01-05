import "@/styles/globals.css";
// import "@/styles/login.css"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "@/redux/store";

import { url } from "@/constants";
import { getUserData, logOutUser } from "@/redux/actions/userAction";
import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
} from "@/redux/reducers/userReducer";
import { SET_EVENTS } from "@/redux/reducers/dataReducer";
// import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import Layout from "@/components/layout";
import axios from "axios";
import { useState,useEffect } from "react";
// import { motion,AnimatePresence, delay } from "framer-motion";
// import Loader from "@/components/loader";
import Head from "next/head";
import { useRouter } from "next/router";
// const samakarn = localFont({
//   src: [
//     {
//       path: '../../public/fonts/SAMARN_.TTF',
//       // weight: '400'
//     }
//   ],
//   variable: '--font-samakarn'
// })
// import { useDispatch } from 'react-redux';
export default function App({ Component, pageProps }) {
  const dispatch = store.dispatch;

  useEffect(() => {
    const token = localStorage.getItem("BLITZID");
    const profile = localStorage.getItem("BLITZUSER");
    axios.defaults.headers.common["Authorization"] = token;
    
      axios.get(`${url}/events`)
      .then(
        d => {
          // console.log(d.data)
          const data = d.data
          dispatch(SET_EVENTS({
            events:data
          }))
        
        }).catch(err=>console.log(err))

    if (token) {
      const decoded = jwtDecode(token);

      if (decoded.exp * 1000 < Date.now()) {
        logOutUser();
        dispatch(SET_UNAUTHENTICATED());
      } else {
        dispatch(SET_AUTHENTICATED());

        // axios.defaults.he  aders.common["Authorization"] = token;

        dispatch(SET_USER(JSON.parse(profile)));
      }
    }
  }, []);
  
  const router = useRouter();

  // NOTE: only show the loader if the first load is at path "/"
  const [SLoading, setSLoading] = useState(router.pathname === "/");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);



  return (
    <>

    <Head>
    <title>Blitzschlag'24</title>
    <meta name="description" content="Description of your page" />
    <meta name="keywords" content="blitzschlag, blitz mnit, blitz, blitz24 , blitzschlag24, mnit,mnit cultural fest" />
    </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} SLoading={SLoading}/>
        </Layout>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          theme="light"
          className={"z-[1000000]"}
        />
      </Provider>
    </>
  );
}
