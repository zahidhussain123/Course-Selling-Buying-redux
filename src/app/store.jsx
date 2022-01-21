import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../features/coursesSlice"
export const store = configureStore({
    reducer:{
        courses:coursesReducer
    }
})