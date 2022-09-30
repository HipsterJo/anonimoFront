import React from "react";
import { useSelector } from "react-redux";
import CustomInput from "../../components/input/input";
import AddAnimeForm from "../../components/AdminComponents/AddAnimeForm";
import AddGenreForm from "../../components/AdminComponents/AddGenreForm";
import { RootState} from "../../redux/store";

const AdminPanel:React.FC= () => {
    const [value, setValue] = React.useState<string>("")
    const [panelType, setPanelType] = React.useState<string>("CreateAnime")
    const isAdmin = useSelector((state:RootState) => state.authSlice.roles.includes("ADMIN"))
    
    if(isAdmin){
    return (
        <div className="max-w-[1174px] mx-auto my-10 ">
        <div className="grid grid-cols-4">
        <div className="flex flex-col col-span-1 pt-2 ">
            <button className="mx-auto w-[50%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
             onClick={()=>setPanelType("CreateAnime")}>Create Anime</button>
            <button className="mx-auto my-4 w-[50%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
             onClick={()=>setPanelType("CreateGenre")}>Create Genre</button>
        </div>
        <div className="col-span-2  ">
        {panelType=="CreateAnime"? <AddAnimeForm/> : <AddGenreForm/>}
        </div>
        </div>
        </div>

    );
    }
    return (
        <h2 className="mx-auto my-auto">ВЫ НЕ АДМИН</h2>
    )
};

export default AdminPanel;