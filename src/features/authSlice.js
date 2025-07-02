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

            const exist = state.userList.find((usr) => {
                return usr.user == action.payload.user
            })
            if(exist){
                return alert('The User Alery Exist')
            }
            state.userList = [...state.userList, action.payload]
            console.log(state.userList);
            localStorage.setItem('usersList', JSON.stringify(state.userList))
        },
        setLoggedUser: (state, action) => {
            
            state.user = action.payload
            if (action.payload){
                 localStorage.setItem('loggedInUser', JSON.stringify({user: action.payload.user , role: action.payload.role} ))
            } else {
                  localStorage.setItem('loggedInUser', JSON.stringify({user: null, role: null} ))
            }
           
            console.log(state.user);
        }
    }
})

export const { setLoggedUser,addUser } = authSlice.actions
export default authSlice.reducer