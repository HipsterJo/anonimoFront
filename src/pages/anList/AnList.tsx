import React, {useState} from "react";


import SortComponent from "../../components/FilterComponents/SortComponent/SortComponent";
import GenreComponent from "../../components/FilterComponents/GenreComponent/GenreComponent"
import {useDispatch, useSelector} from "react-redux"
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import {RootState, useAppDispatch} from "../../redux/store";
import {Anime, fetchAnime, selectIsLoaded} from "../../redux/slices/cardSlice"
import SkeletonAnList from "./SkeletonAnList";
import {useParams} from "react-router-dom";
import {onChangeGenresValue} from "../../redux/slices/filterSlice";

const AnList = () => {
    type useParamsTypes={
        genre:string
    }
    const dispatch = useAppDispatch()
    const items = useSelector<RootState, Anime[]>((state) => state.cardSlice.cards)
    const isLoaded = useSelector(selectIsLoaded)
    let {genre} = useParams<useParamsTypes>()
    const search: string =useSelector((state:RootState)=>state.filterSlice.searchValue)
    const sort =useSelector((state:RootState)=>state.filterSlice.sort)

    if(genre) {
        dispatch(onChangeGenresValue(genre))
    }

    const getAnime  = async () =>{
        if(!genre){
            genre = ""
        }
        const searchValue = search
        await  dispatch(fetchAnime({searchValue, sort, genre}))

    }

    React.useEffect(()=>{

        getAnime()
    },[genre])

    if(isLoaded === 'completed'){

        return (

            <div className="flex max-w-[1174px] my-12 mx-auto">
                <div className="flex flex-col px-5">
                    <div className="grid grid-cols-7">
                        <div className="col-span-2 md:col-span-7"><SortComponent/></div>
                        <div className="col-span-5 md:col-span-7 "><GenreComponent/></div>
                    </div>
                    <div className="col-span-7 my-4 max-w-[1174px] grid grid-cols-5 gap-8 lg:grid-cols-3 sm:!grid-cols-2 mx-auto">{
                        items.map((value: any) =>
                            <div key={value.imageCard}><AnimeCard anime1={value}/></div>
                        )}
                    </div>
                </div>
                <div className="{s.fileters}">

                </div>
            </div>
        );
    }
    else{
        return(
            <>
                <SkeletonAnList/>
            </>
        )
    }
}
  export default AnList;