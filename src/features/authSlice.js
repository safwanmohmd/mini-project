import { createSlice } from "@reduxjs/toolkit";

const currentUser = JSON.parse(localStorage.getItem('loggedInUser')) 
const getUsersList = JSON.parse(localStorage.getItem('usersList'))
const initialState = {
    user: currentUser || null,
    userList: getUsersList || []
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userList = [...state.userList, action.payload]
            console.log(state.userList);
            localStorage.setItem('usersList', JSON.stringify(state.userList))
        },
        setLoggedUser: (state, action) => {
            state.user = action.payload
            localStorage.setItem('loggedInUser', JSON.stringify(state.user))
            console.log(state.user);
        }
    }
})

export const { setLoggedUser,addUser } = authSlice.actions
export default authSlice.reducer