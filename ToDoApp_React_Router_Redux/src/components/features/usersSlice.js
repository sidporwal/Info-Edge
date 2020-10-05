import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        loadUser(state, action) {
            return action.payload;
        }
    }
});

export const { loadUser } = usersSlice.actions;

export const selectUsers = state => state.users;

export default usersSlice.reducer;