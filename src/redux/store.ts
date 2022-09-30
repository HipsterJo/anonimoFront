import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import cardSlice from './slices/cardSlice'
import {useDispatch} from "react-redux";
import auctionWheelSlice from "./slices/auctionWheelSlice";
import genresSlice from "./slices/genresSlice";
import authSlice from "./slices/authSlice";


export const store = configureStore({
  reducer: {
    filterSlice,
    cardSlice,
    auctionWheelSlice,
    genresSlice,
    authSlice
  },
})
export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch  = () => useDispatch<AppDispatch>()