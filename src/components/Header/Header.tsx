import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MainRef from "./mainMenu/MianRef";
import { onChangeSearchValue } from "../../redux/slices/filterSlice";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import { useState } from "react";
import { RootState } from "../../redux/store";
import { BsFillPersonFill } from "react-icons/bs";
import { slide as Menu } from "react-burger-menu";
import { BiMenu } from "react-icons/bi";


export type CategorItem = {
  name: string;
  path: string;
  _id: string;
};

const categories: CategorItem[] = [
  {
    name: "Главная",
    path: "/",
    _id: "main",
  },
  {
    name: "Список аниме",
    path: "/anList",
    _id: "anList",
  },
  {
    name: "Колесо Аукцион",
    path: "/wheel",
    _id: "wheel",
  },
];



type HeaderProps = {
  active: boolean;
  setActive: any;
};

const Header: React.FC<HeaderProps> = ({ active, setActive }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const search = useSelector<RootState>(
    (state) => state.filterSlice.searchValue
  );
  
  const [value, setValue] = useState<string>("");

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(onChangeSearchValue(str));
    }, 500),
    []
  );
  const onChangeInput = (event: any) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <header className="flex gap-2 mx-auto px-3 py-3 text-xl justify-between items-center  max-w-[1274px] md:w-screen md:px-0">
      <div className=" flex items-center gap-10 px-2">
        <Link to="/" className="text-[#FFFF] text-4xl md:text-3xl font-bold">
          Anonime
        </Link>
      </div>
      <div className="visible md:invisible md:!absolute flex gap-7 lg:flex-col" >
        <ul className="flex items-center gap-10">
          {categories.map((value) => (
              <li className="display flex" key={value._id}>
                <MainRef obj={value}/>
              </li>
          ))}
        </ul>


        <Link to={categories[1].path} className="menu-item">
          <input
              type="text"
              placeholder="Поиск.."
              className="w-[100%] lg:w-[100%] py-1 px-7 border-0 text-base rounded-3xl bg-[#374151] outline-none"
              value={value}
              onChange={(event: any) => onChangeInput(event)}
          ></input>
        </Link>
      </div>


      <Menu
          burgerButtonClassName="text-[#FFFF] text-4xl md:text-3xl font-bold h-10 w-10"
          customBurgerIcon={false}
          isOpen={isOpen}
          width={'50%'}
          overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
          right

      >


        <ul className="flex items-center gap-10">
          {categories.map((value) => (
              <li className="display flex" key={value._id}>
                <MainRef obj={value}/>
              </li>
          ))}
        </ul>


        <Link to={categories[1].path} className="menu-item">
          <input
              type="text"
              placeholder="Поиск.."
              className="w-full py-1 px-7 border-0 text-base rounded-3xl bg-[#374151] outline-none"
              value={value}
              onChange={(event: any) => onChangeInput(event)}
          ></input>
        </Link>

      </Menu>
      <div className="flex w-[60px]">
          
          <button className="invisible md:visible" onClick={()=>setIsOpen(!isOpen)}>
            <BiMenu />
          </button>

          <button onClick={() => setActive(!active)}>
            <BsFillPersonFill  />
          </button>
        
      </div>  
    </header>
  );
};

export default Header;
