import React from "react";

import {useSelector} from "react-redux"
import {RootState} from "../../redux/store";
import {Anime} from "../../redux/slices/cardSlice";
import SliderShowCase from "./SliderShowCase"

const ShowCase:React.FC = () => {

    const items  = useSelector<RootState, Anime[]>((state)=>state.cardSlice.cards)

    const animeHot = items.slice().sort((acc,curr) =>acc.rating > curr.rating ? 1 : -1).slice(0,4)

    return (
      
      <SliderShowCase animeHot = {animeHot}/>
    );
  };
  
  export default ShowCase;