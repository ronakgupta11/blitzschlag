import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { url } from "@/constants";
import {  logOutUser } from "@/redux/actions/userAction";
import {
  SET_AUTHENTICATED,
  SET_MNIT,
  SET_UNAUTHENTICATED,
  SET_USER,
} from "@/redux/reducers/userReducer";
import { SET_EVENTS } from "@/redux/reducers/dataReducer";
import { jwtDecode } from "jwt-decode";
import Layout from "@/components/layout";
import axios from "axios";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
export default function App({ Component, pageProps }) {
  const dispatch = store.dispatch;
  useEffect(() => {
    const token = localStorage.getItem("BLITZID");
    let profile = localStorage.getItem("BLITZUSER");
    profile = JSON.parse(profile)

    axios.defaults.headers.common["Authorization"] = token;
    

    axios.get(`${url}/events`)
      .then(
        d => {
          // console.log(d.data)
          const data = d.data
          dispatch(SET_EVENTS({
            events: data
          }))
          // toast("api called")

        }).catch(err => console.log(err))

    if (token) {
      const decoded = jwtDecode(token);

      if (decoded.exp * 1000 < Date.now()) {
        logOutUser();
        dispatch(SET_UNAUTHENTICATED());
      } else {
        dispatch(SET_AUTHENTICATED());

        // axios.defaults.he  aders.common["Authorization"] = token;

        dispatch(SET_USER(profile));
        console.log(profile)
        
        if(profile?.credentials.email.slice(-10) === "mnit.ac.in"){
          dispatch(SET_MNIT())
        }
      }
    }
  }, []);

  const router = useRouter();

  // NOTE: only show the loader if the first load is at path "/"
  const [SLoading, setSLoading] = useState(router.pathname === "/");
  const [slickModal,setSlickModal] = useState(router.pathname === "/profile")
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);



  return (
    <>
      <Head>
        <title>Blitzschlag'24</title>
        <meta name="description" content="BLITZSCHLAG 2024, the largest annual cultural festival of Rajasthan and the crown jewel of the Malaviya National Institute of Technology ,Jaipur " />
        <meta name="keywords" content="blitzschlag, blitz mnit, blitz, blitz24 , blitzschlag24, mnit,mnit cultural fest, blitzschlag" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Blitzschlag'24" />
<meta property="og:description" content="BLITZSCHLAG 2024, the largest annual cultural festival of Rajasthan" />
<meta property="og:image" content="/favicon.ico" />m 
      </Head>
      <Provider store={store}>
        <AnimatePresence mode="wait">
          <motion.div key={router.pathname}>
            <Layout>
              <Component {...pageProps} SLoading={SLoading} slickModal={slickModal} />
            </Layout>
            {/* <motion.div
              className="slideIn absolute top-0 left-0 w-full h-screen bg-black origin-bottom z-[100]"
              intial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div> */}
            {/* <motion.div
              className="slideOut absolute top-0 left-0 w-full h-screen bg-black origin-top z-[100]"
              intial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div> */}
          </motion.div>
        </AnimatePresence>
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
