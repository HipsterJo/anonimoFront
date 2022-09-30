import { Link } from "react-router-dom";
import React from "react";
import {CategorItem} from "../Header"

type MainRefProps = {
    obj: CategorItem
}
const MainRef:React.FC<MainRefProps> = ({obj}) => {

    
    return (
      <>
        <Link to ={obj.path}
         className="text-xl md:text-base"
         key = {obj._id}>
             {obj.name}
        </Link>
      
      </>
    );
  };
  
  export default MainRef;