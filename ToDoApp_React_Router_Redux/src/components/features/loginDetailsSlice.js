import { createSlice } from '@reduxjs/toolkit';

let initiaState = {
    username: '',
    password: ''
};

export const loginDetailsSlice = createSlice({
    name: 'login',
    initialState: initiaState,
    reducers: {
        fillDetails(state, action) {
            let { username, password } = action.payload;
            state.username = username;
            state.password = password;
        },
        reset(state) {
            state.username = '';
            state.password = '';
        }
    }
});

export const { fillDetails, reset } = loginDetailsSlice.actions;

export const selectUsername = state => (state.login.username);
export const selectPassword = state => (state.login.password);

export default loginDetailsSlice.reducer;

/*
state.username = action.username;
            state.password = action.password;
            */
