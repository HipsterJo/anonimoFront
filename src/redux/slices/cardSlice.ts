import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import {FilterSliceState, onChangeGenresValue} from "./filterSlice";
import {RootState} from "../store";
import {formType} from "../../models/formType";
import $api, { API_URL } from '../../http';


export type Anime ={
    _id: string
    name: string;
    imageCard: string;
    discriptionFull: string;
    src: string;
    lastEpisode:number;
    rating: number;
    imageHuge: string
    discriptionBriefly: string
    dataRealese: number
    dataPublish: number
    genre: string[],
    __v: number

}

interface cardSliceState{
    cards: Anime[];
    status: Status
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}


const initialState: cardSliceState = {
  cards: [],
  status: Status.LOADING
}

export const fetchAnime = createAsyncThunk('anime/fetchAnimeStatus', async (params:FilterSliceState) => {
  const{sort, searchValue, genre} = params

  onChangeGenresValue(genre)
  let seacrh = ""
  let genreValue =""
  if (searchValue){
      seacrh = `&search=${searchValue}`
  }
  if (genre){
     genreValue = `&genre=${genre}`
  }



  const {data} = await axios.get<Anime[]>(
      `http://localhost:5000/api/animes/sortBy/?sort=${sort.sortProperty}${seacrh}${genreValue}`
  )

  return data as Anime[]
  }
)
const headers = {
    'Authorization': `Bearer ${localStorage.getItem("token")}`
}
export const createAnime = createAsyncThunk('anime/createAnime', async (params:formType) => {
    params = {...params, genre: params.genre.split(",")}
    const {data} = await axios.post("http://localhost:5000/api/animes", params, {headers})
    return data
    }
  )


export const cardSlice = createSlice({
  name: 'animeCard',
  initialState,
  reducers: {
    setCards(state, action){
      
        state.cards = action.payload;
        
    },
    
  },
    extraReducers: (builder) => {
        builder.addCase(fetchAnime.pending, (state, action) => {
            state.status = Status.LOADING;
            state.cards = [];
        });

        builder.addCase(fetchAnime.fulfilled, (state, action) => {
            state.cards = action.payload;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchAnime.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.cards = [];
        });

        builder.addCase(createAnime.fulfilled, (state, action) => {
            state.cards = [...state.cards, action.payload]
            console.log("Zaebis")
            state.status = Status.SUCCESS;
        });

        builder.addCase(createAnime.rejected, (state, action) => {
            state.status = Status.ERROR;
            
        });


 }
 
})


export const {setCards} = cardSlice.actions
export const selectIsLoaded = (state:RootState)=>state.cardSlice.status
export default cardSlice.reducer








