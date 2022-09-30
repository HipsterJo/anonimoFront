import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import axios from "axios";
import {Anime} from "./cardSlice";





export interface Sort {
  sortProperty: "rating"|"name"|"dataRealese"|"dataPublish";
  name: string;
}

export interface FilterSliceState{
  sort: Sort;
  searchValue: string;
  genre:string;
}

const initialState: FilterSliceState = {
  sort: {
    sortProperty: "dataPublish",
    name: "Датe добавления"
},
  searchValue: "",
  genre:""

}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSelectedSort(state, action: PayloadAction<Sort>){
        state.sort = action.payload;
    },
    onChangeSearchValue(state, action: PayloadAction<string>){
        state.searchValue = action.payload;
    },
    onChangeGenresValue(state, action: PayloadAction<string>){
      state.genre = action.payload;
    }
  }
})

export const {setSelectedSort, onChangeSearchValue, onChangeGenresValue} = filterSlice.actions
export const selectGenre = (state:RootState)=> state.filterSlice.genre


export default filterSlice.reducer