import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../components/features/usersSlice';
import loginReducer from '../components/features/loginDetailsSlice';


export default configureStore({
  reducer: {
    users: usersReducer,
    login: loginReducer
  },
});
