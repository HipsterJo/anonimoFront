
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import {RootState, useAppDispatch} from "./redux/store";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AnList from "./pages/anList/AnList";
import React from "react";
import {useState} from "react"
import { useSelector } from "react-redux"

import { fetchAnime} from "./redux/slices/cardSlice"
import AnimePage from "./pages/AnimePage/AnimePage"
import SkeletonMainPage from "./pages/MainPage/SkeletonMainPage";
import Wheel from "./pages/Wheel/Wheel";
import ModalWindow from "./components/Modal/LoginWindow/LoginWindow";
import  RegisterForm  from "./components/Modal/RegisterForm/RegisterForm";
import {checkAuth} from "./redux/slices/authSlice";
import Admin from "./pages/AdminPanel/AdminPanel";
import Modal from "./components/Modal/Modal";

  function App() {
  const isLoaded = useSelector((state:RootState) => state.cardSlice.status)

  const dispatch = useAppDispatch()
  const[modalActive, setModal] = useState<boolean>(true)
  const search: string =useSelector((state:RootState)=>state.filterSlice.searchValue)
  const sort =useSelector((state:RootState)=>state.filterSlice.sort)
  const genre = useSelector((state:RootState)=>state.filterSlice.genre)



  const getAnime = async ()=>{

    const searchValue = search

    dispatch(fetchAnime({searchValue, sort, genre}))
    
  }

  React.useEffect(()=>{
      getAnime()

},[sort,search, genre])

React.useEffect(()=>{
  if (localStorage.getItem("token")) {
    dispatch(checkAuth())
  }
  },[])

  return (

    <div className="App">

      <BrowserRouter>
          <Header active = {modalActive} setActive={setModal} />



        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/anList/" element={<AnList  />}/>
          <Route path="/anime/:id" element={<AnimePage  />}/>
          <Route path="/anList/:genre" element={<AnList  />}/>
          <Route path="/wheel" element={<Wheel/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>

      </BrowserRouter>
        <ModalWindow active={modalActive} setActive={setModal}>
            <Modal/>
        </ModalWindow>
    </div>
  )

}
export default App;
