import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { formGenreType } from "../../models/formGenreType";
import {RootState} from "../store";



export const fetchGenre = createAsyncThunk<Genre[], void, {}>('genres/fetchGenreStatus', async () => {


        const {data} = await axios.get<Genre[]>(
            `http://localhost:5000/api/genres`
        )

        return data as Genre[]
    }
)
const headers = {
    'Authorization': `Bearer ${localStorage.getItem("token")}`
}

export const createGenre = createAsyncThunk('genres/createGenre', async (params:formGenreType) => {
   
    const {data} = await axios.post("http://localhost:5000/api/genres", params, {headers})
    return data
    }
  )





export type Genre ={
    _id: string;
    name: string;
    param: string;
}

interface genreSliceState{
    genres: Genre[];
    status: Status
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}


const initialState: genreSliceState = {
    genres: [],
    status: Status.LOADING
}

export const cardSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        setCards(state, action){

            state.genres = action.payload;

        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchGenre.pending, (state, action) => {
            state.status = Status.LOADING;
            state.genres = [];
        });

        builder.addCase(fetchGenre.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchGenre.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.genres = [];
        });

        builder.addCase(createGenre.fulfilled, (state, action) => {
            state.genres = [...state.genres, action.payload]
            console.log("Zaebis2")
            state.status = Status.SUCCESS;
        });

        builder.addCase(createGenre.rejected, (state, action) => {
            state.status = Status.ERROR;
            
        });

    }

})


export const {setCards} = cardSlice.actions
export const selectIsLoaded = (state:RootState)=>state.cardSlice.status
export default cardSlice.reducer
