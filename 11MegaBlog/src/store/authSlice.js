import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    state:false,
    userData:null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
           
        },
        logout: (state) => {
            state.user = null;
            state.status = false;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;