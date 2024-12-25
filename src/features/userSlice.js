import { createSlice } from '@reduxjs/toolkit';

const intialState = {
    user: null,
}

const userSlice = createSlice({
    name:'user',
    initialState: intialState,
    reducers: {
        login: (state, action) =>{
            state.user = action.payload;
        },
        logout: (state) =>{
            state.user = null;
        },
    },
})

export const { login,logout } = userSlice.actions

export const selectUser = state => state.user.user
// first user is defined in userslice_name & 2nd in initialstate

export default userSlice.reducer