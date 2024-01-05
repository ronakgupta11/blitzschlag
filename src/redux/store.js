import { configureStore } from "@reduxjs/toolkit";

// import { createStore,combineReducers,compose,applyMiddleware } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk";
import userReducer from "./reducers/userReducer"
import dataReducer from "./reducers/dataReducer"
import uiReducer from "./reducers/uiReducer"
// import { composeWithDevTools } from "redux-devtools-extension";




// const middleware = [thunk]
const reducers =({
    user:userReducer,
    data:dataReducer,
    ui:uiReducer
})

const store = configureStore({
    reducer:
    reducers})
export default store