import "@/styles/globals.css";
// import "@/styles/login.css"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "@/redux/store";

import { getUserData, logOutUser } from "@/redux/actions/userAction";
import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
} from "@/redux/reducers/userReducer";
// import axios from 'axios';
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Layout from "@/components/layout";
import axios from "axios";

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

  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          theme="light"
        />
      </Provider>
    </>
  );
}
