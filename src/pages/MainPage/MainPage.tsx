import React from "react";


import NewRelease from "../../components/NewRelease/NewRelease";
import ShowCase from "../../components/ShowCase/ShowCase";
import { useDispatch } from "react-redux/es/exports";
import {onChangeGenresValue, onChangeSearchValue} from "../../redux/slices/filterSlice"
import {useSelector} from "react-redux";
import {selectIsLoaded} from "../../redux/slices/cardSlice";
import SkeletonMainPage from "./SkeletonMainPage";
import { motion } from "framer-motion"




const listVariation = {
    visible:{
        opacity:1,
        x:0,
        transition:{
            delay:1
        }
    },
    hidden:{
      opacity: 0
    }
}


const MainPage:React.FC = () => {
  const isLoaded = useSelector(selectIsLoaded)
  const dispatch = useDispatch()
  dispatch(onChangeSearchValue(""))
  dispatch(onChangeGenresValue(""))
    if(isLoaded == 'completed'){
    return (
      <div className = "flex flex-col max-w-[1174px] mx-auto my-12">
        <div className="my-2 font-w-normal font-xl ">
          <h2>Аниме дня</h2>

        </div>
          <motion.div
              variants = {listVariation}
              initial = 'hidden'
              animate = 'visible'
              custom
          >
               <ShowCase/>
          </motion.div>
        <div className="my-2 font-w-normal font-xl ">
          <h2>Новыe релизы</h2>
        </div>
          <motion.div
              variants = {listVariation}
              initial = 'hidden'
              animate = 'visible'
          >
              <NewRelease />
          </motion.div>
      </div>
    );}
    else {
        return (
            <SkeletonMainPage/>
        )
    }
  };
  
  export default MainPage;