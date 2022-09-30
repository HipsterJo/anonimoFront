import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {Anime} from "./cardSlice";


interface auctionWheelSliceState{
        data: Anime[]
}
const initialState: auctionWheelSliceState = {
        data: []

}

export const auctionWheelSlice = createSlice({
    name: 'wheel',
    initialState,
    reducers: {
        addInList(state, action: PayloadAction<Anime>){
            state.data.push(action.payload);
        },
        deleteInList(state, action: PayloadAction<Anime>) {
            const deleteIndex:number = state.data.indexOf(action.payload)
            state.data.splice(deleteIndex, 1);
        },
        deleteAllInList(state) {
            state.data = []
        }
    }
})

export const {addInList, deleteInList, deleteAllInList} = auctionWheelSlice.actions


export default auctionWheelSlice.reducer