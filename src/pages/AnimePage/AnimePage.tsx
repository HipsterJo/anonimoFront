import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import {Anime} from "../../redux/slices/cardSlice"
import SkeletonAnimePage from "./SkeletonAnimePage";

import {BsFillBookmarkXFill, BsFillBookmarkPlusFill} from "react-icons/bs"
import {RootState} from "../../redux/store";
import {addInList, deleteInList} from "../../redux/slices/auctionWheelSlice";
import ReactPlayer  from 'react-player'


const AnimePage: React.FC = () => {
   const [anime, setAnime] = React.useState<Anime>();
   const bookMark = useSelector<RootState, Anime[]>(state => state.auctionWheelSlice.data)

   const [isAdded, setAdd] = useState<boolean>()





   React.useEffect(() => {
      async function fetchAnime() {

         try {
            const {data} = await axios.get('http://localhost:5000/api/animes/' + id);

            setAnime(data)
            setAdd(bookMark.filter(i => i.name == data.name).length > 0)
         } catch (error) {
            alert('Ошибка получения аниме!')
         }
      }

      fetchAnime();
   }, [])






   const dispatch = useDispatch()



   const {id} = useParams();
   //Проверяем, если аниме в "заклкадках"


      //

      const handleOnClick = (): void => {
         if (anime) {
            if (isAdded) {
               dispatch(deleteInList(anime))
               setAdd(!isAdded)
            } else {
               dispatch(addInList(anime))
               setAdd(!isAdded)
            }
         }
      }





   if (!anime) {
      return (
          <div className=" md:max-w-[764px] sm:max-w[400px] max-w-[1174px] my-20 m-auto px-3">
             <SkeletonAnimePage/>
          </div>
      )
   }

      return (
          <div className=" md:max-w-[764px] sm:max-w[400px] max-w-[1174px] my-20 m-auto px-3">
             <div className=" ">
                <h1 className="text-4xl md:text-2xl  text-white capitalize font-semibold">{anime.name} </h1>
                <div className="rounded-xl overflow-hidden aspect-video mt-5">

                   <ReactPlayer  controls={true} url={anime.src} width="100%" height="100%"/>
                   {/*<div>*/}
                   {/*   <Player src={anime.src}  />*/}
                   {/*</div>*/}
                </div>

                <div className="grid grid-cols-6 grid-flow-row-dense gap-6  my-10 ">
                   <div className="col-span-2 sm:col-span-5 md:col-span-5">
                      <img className="lg: h-max-[410px] md:mx-auto rounded-xl overflow-hidden object-cover"
                           src={anime.imageCard}/>
                   </div>

                   <div className="col-span-3 md:col-span-5 sm:col-span-5">
                      <div className="sm:grid-cols-2 md:grid-cols-2 grid gap-4">
                         <div className="flex flex-col">
                            <h2 className="text-xl text-white font-semibold">Тип :</h2>
                            <p className="text-xl text-gray-400">Сериал</p>
                         </div>
                         <div className="flex flex-col">
                            <h2 className="text-xl text-white font-semibold">Статус :</h2>
                            <p className="text-xl  text-gray-400 capitalize">Завершен</p>
                         </div>
                         <div className="flex flex-col">
                            <h2 className="text-xl text-white font-semibold">Студия :</h2>
                            <p className="text-xl text-gray-400 capitalize">Studio Pierrot</p>
                         </div>
                         <div className="flex flex-col">
                            <h2 className="text-xl text-white font-semibold">Длительность серии:</h2>
                            <p className="text-xl text-gray-400 capitalize">~23 минуты.</p>
                         </div>
                         <div className="flex flex-col">
                            <h2 className="text-xl text-white font-semibold">Жанры :</h2>
                            <p className="text-xl text-gray-400 capitalize ">
                               <div className="grid ">
                               {anime.genre.map((value)=>{
                                  return <Link  to={"/anList/"+value.split("_")[1]} key={value}
                                  className="hover:text-pink-400 "
                                  >{value.split("_")[0]}</Link>
                               })
                               }
                               </div>
                            </p>
                         </div>
                      </div>
                   </div>

                   <div className="col-span-1 ml-auto min-w-[60px] ">
                      <div
                          className=" py-1 px-1 lg:text-lg text-xs sm:text-xs bg-gray-900 border border-gray-600 text-white text-center rounded-xl">
                         <span>{anime.rating}</span>
                      </div>
                      <a onClick={handleOnClick}>
                         {

                            isAdded ? <BsFillBookmarkXFill className="mx-auto my-5" color="red" size="3rem"/>:
                            <BsFillBookmarkPlusFill className="mx-auto my-5" color="green" size="3rem"/> }
                      </a>

                   </div>
                </div>

                <div className="">
                   <p className="lg:text-2xl text-xl sm:text-base text-white font-semibold">Описание :</p>
                   <p className="lg:text-xl text-base sm:text-xs text-gray-400  mt-1 leading-relaxed">
                      {anime.discriptionFull}
                   </p>
                </div>
             </div>


          </div>

      );
   }

  export default AnimePage;