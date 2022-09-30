import React from "react";

import {Link} from 'react-router-dom'
import {Anime} from "../../redux/slices/cardSlice"

type AnimeCardProps = {
    anime1: Anime
}

const AnimeCard:React.FC<AnimeCardProps> = ({anime1}) => {

    return (
        <Link key = {anime1._id} to ={`/anime/${anime1._id}`} className="h-[253px]  w-[173px]  flex   items-center relative">
                  <img className="object-cover w-full h-full" src={anime1.imageCard}/>
                  <div
                      className="bg-gradient-to-t from-black w-full h-full flex flex-col justify-end items-center absolute py-4 px-2  text-[#FFFF] ease-in-out duration-300 opacity-0 hover:opacity-100 ">
                <h1 className="">{anime1.name}</h1>

             </div>
        </Link>
    );
  };
  
  export default AnimeCard;