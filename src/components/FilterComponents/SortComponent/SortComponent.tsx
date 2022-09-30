import React from "react";

import { useSelector, useDispatch } from 'react-redux'

import {setSelectedSort, Sort} from "../../../redux/slices/filterSlice"
import s from "./SortComponent.module.css";
import {RootState} from "../../../redux/store";


const SortType: Sort[] = [
    {
        sortProperty: "dataPublish",
        name: "Датe добавления"
    },
    {
        sortProperty: "dataRealese",
        name: "Датe выхода"
    },
    {
        sortProperty: "rating",
        name: "Рейтингу"
    },
    {
        sortProperty: "name",
        name: "Названию"
    }
]

const SortComponent = () => {
    const dispatch = useDispatch();
    const selectedSort =useSelector<RootState, Sort>((state)=>state.filterSlice.sort)
   
    
    const onCLickSelectedSort = (obj:Sort) =>{
        dispatch(setSelectedSort(obj))
    }

    return (<div className={s.SortComponent}>
    <p>Сортировать по:</p>   
        <div className={s.dropdown}>
        <button className={s.dropbtn}>{selectedSort.name}</button>
        <div className={s.dropdowncontent}>
          {
            SortType.map((value) =>(
              <button key={value.sortProperty} onClick={()=>onCLickSelectedSort(value)}>{value.name}</button>
            ))}
        </div>
        
      </div>
      
      </div>
    );
  };
  
  export default SortComponent;