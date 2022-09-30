import React, {useEffect, useState} from "react";
import ReactButtonSlider from '@gunawanedy/react-button-slider';
import {GiSettingsKnobs} from "react-icons/gi"
import {useDispatch, useSelector} from "react-redux";
import {onChangeGenresValue, selectGenre} from "../../../redux/slices/filterSlice";
import {Link, useSearchParams} from 'react-router-dom';
import {fetchGenre, Genre} from "../../../redux/slices/genresSlice";
import {RootState, useAppDispatch} from "../../../redux/store";

const GenreComponent:React.FC = () => {

    const dispatch = useAppDispatch()


    const currentGenre = useSelector(selectGenre)


    const [mainButtonCondition, setCondition] = useState<boolean>(false)

    const changeCondition=()=>{
        setCondition(!mainButtonCondition)
    }
    React.useEffect(()=>{
        dispatch(fetchGenre())
    },[])


    const genresAll:Genre[] = useSelector((state:RootState) => state.genresSlice.genres)
    return(

        <div className=" flex items-center max-w-[755px]">
        <button className = {mainButtonCondition ?"md:ml-0  bg-[#C9D7F8] text-[16px] text-black mx-3 py-[7px] px-3 flex items-center rounded-lg active:bg-[#374151] ":
            " bg-[#374151] text-[16px] mx-3 py-[7px] px-3 flex rounded-lg text-white items-center active:bg-[#C9D7F8] md:ml-0  "}
            onClick={changeCondition}>
            < GiSettingsKnobs strokeWidth="16px" color ={mainButtonCondition ?"#2D2D2A":"white"} className="mx-1"/>
            <div className="text-[16px]">{currentGenre ? genresAll.find(obj=>obj.param ===currentGenre)?.name: "Все"}</div>
        </button>

            {mainButtonCondition &&
                <div className="w-full">
                <ReactButtonSlider >
                        <div className = "flex !max-w-[200px]">
                        <Link to={"/anList/"}
                              className=" mx-2 bg-[#374151] text-[16px] py-[7px] px-3 flex rounded-lg items-center active:bg-[#C9D7F8]"
                              onClick={()=>dispatch(onChangeGenresValue(""))}
                        >
                            Все
                        </Link>
                    {
                        genresAll.map((item)=>{
                            return(
                            <Link to={"/anList/" + item.param}
                                className=" mx-2 bg-[#374151] text-[16px] py-[7px] px-3 flex rounded-lg items-center active:bg-[#C9D7F8]"
                                key={item.param}
                            >
                                {item.name}
                            </Link>
                            )})
                    }
                        </div>
                </ReactButtonSlider>
                </div>
            }
        </div>
    );
};

export default GenreComponent;