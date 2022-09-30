import React from "react";

import {useSelector} from "react-redux"
import AnimeCard from "../AnimeCard/AnimeCard";
import {RootState} from"../../redux/store"
import {Anime} from "../../redux/slices/cardSlice"
import SkeletonNewRelease from "./Skeleton";

const NewRelease:React.FC = () => {
  
   const items  = useSelector<RootState, Anime[]>((state)=>state.cardSlice.cards)
   const animeList = [...items]
    // const NewRealeseList = props.anime.sort((a,b) => (a.dataPublish > b.dataPublish) ? a : b).slice(0,6)
    const NewRealeseList = animeList.sort((a,b) =>{
      if (a.dataPublish > b.dataPublish)
       return -1
      else
      return 1 
    }).slice(0,6)
    

    return (
    <div className = "">
       <div className="max-w-[1174px] grid grid-cols-5 gap-5 lg:grid-cols-3 sm:!grid-cols-2"> {
            NewRealeseList.map((value) =>(
              <div key={value.imageCard} className="mx-auto"><AnimeCard anime1 = {value}/></div>
            ))}
       </div>
    </div>
    );
};
  export default NewRelease;