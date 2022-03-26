import { createSlice} from '@reduxjs/toolkit';
import { ILogin } from '../models/ILogin';

const initialState: ILogin = {
    isAuth: false,
    error: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSuccess: (state) => {
            state.isAuth = true
            state.error = ''
        },
        loginFail: (state, {payload}) => {
            state.isAuth = false
            state.error = payload
        },
        logout: (state) => {
            state.isAuth = false
            state.error = '' 
        }
    },
})

const { actions } = loginSlice;

export const {loginSuccess, loginFail, logout} = actions;

export default loginSlice.reducer;