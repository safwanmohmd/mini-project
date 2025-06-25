import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    loggedIn : false,
    loading: false,
    error: null
}



const loginlice = createSlice({
    name: "login",
    initialState,
    reducers :{
       
    }
    

})
export default loginlice.reducer