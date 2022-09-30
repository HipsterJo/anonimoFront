import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import axios from "axios";
import { IUser } from '../../models/IUser';
import AuthService from '../../services/AuthService';
import { AuthResponse } from '../../models/response/Authresponse';
import { API_URL } from '../../http';

type InitialAsyncThunk = {
    email:string,
    password:string
}
export const login = createAsyncThunk('auth/login', async (obj:InitialAsyncThunk ) => {
    const {email,password}=obj;
    const response = await AuthService.login(email, password)
    console.log(response)
    return response.data as AuthResponse
})

export const registration = createAsyncThunk('auth/registration', async (obj:InitialAsyncThunk ) => {
    const {email,password}=obj;
    const response = await AuthService.registration(email, password)
    console.log(response)
    return response.data as AuthResponse
})

export const logout = createAsyncThunk('auth/logout', async ( ) => {
    const response = await AuthService.logout()
    console.log(response)
})
export const checkAuth = createAsyncThunk('auth/check', async ()=>{
    
    const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials:true})
    return response.data as AuthResponse
})

export interface IAuthState {
    user: IUser | null;
    isAuth: boolean;
    roles: Array<string>;
}

const initialState: IAuthState = {
    user: null,
    isAuth: false,
    roles: []
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuth: (state, action) => {
        state.isAuth = action.payload
        },
    setUser: (state, action) => {
        state.user = action.payload
    }
  }, 
  extraReducers: (builder) => {
    //login
    builder.addCase(login.pending, (state, action) => {
       
    });

    builder.addCase(login.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.accessToken)
        state.isAuth = true
        state.user = action.payload.user
        state.roles = action.payload.user.roles
    });

    builder.addCase(login.rejected, (state, action) => {
        console.log(action.payload)
    });

    //regisration
    builder.addCase(registration.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.accessToken)
        state.isAuth = true
        state.user = action.payload.user
        state.roles = action.payload.user.roles
    });

    builder.addCase(registration.rejected, (state, action) => {
        console.log(action.payload)
    });
    //logout
    builder.addCase(logout.fulfilled, (state) => {
        localStorage.removeItem('token')
        state.isAuth = false
        state.user = {} as IUser
        state.roles = []
    });

    builder.addCase(logout.rejected, (state) => {
        console.log('error logout')
    });
    //checkAuth
    builder.addCase(checkAuth.fulfilled, (state, action) => {
        console.log(action.payload)
        localStorage.setItem('token', action.payload.accessToken)
        state.isAuth = true
        state.user = action.payload.user
        state.roles = action.payload.user.roles
    });

    builder.addCase(checkAuth.rejected, (state, action ) => {
        console.log('error in checkAuth')
    });

}
})

export const {} = authSlice.actions



export default authSlice.reducer