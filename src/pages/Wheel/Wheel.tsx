import React from "react";
import {useState} from "react";
import { Wheel } from 'react-custom-roulette'
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../redux/store";
import {Anime} from "../../redux/slices/cardSlice";
import {WheelData} from "react-custom-roulette/dist/components/Wheel/types";
import {deleteAllInList} from "../../redux/slices/auctionWheelSlice"


const WheelRoulette = () => {

    const dataRaw = useSelector<RootState, Anime[]>(state => state.auctionWheelSlice.data)

    let data: WheelData[] = []
    dataRaw.map((value) => {
            data.push({
                option: value.name.slice(0, 13)
            })
        }
    )

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const dispatch = useDispatch()
    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
    };
if (dataRaw.length > 0)
    {
        return (

            <div className=" mx-auto max-w-[1174px] p-10 flex flex-col justify-center">

                <div className="self-center">
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={data}
                        outerBorderColor={"#f2f2f2"}
                        outerBorderWidth={2}
                        innerBorderColor={"#f2f2f2"}
                        radiusLineColor={"#dedede"}
                        radiusLineWidth={5}
                        textColors={["#ffffff"]}
                        fontSize={20}
                        perpendicularText={true}
                        backgroundColors={[
                            "#686868",
                            "#7698B3",
                            "#467599",
                            "#344966",
                            "#6C6F7D",
                            "#586F7C"
                        ]}
                        onStopSpinning={() => {
                            setMustSpin(false);
                        }}
                    />
                </div>
                <button className=" border-2 py-3 px-8 rounded text-xl my-5 " onClick={handleSpinClick}>
                    Крутить
                </button>
                <button className=" border-2 py-3 px-8 rounded text-xl my-5 bg-rose-500" onClick = {()=>(dispatch(deleteAllInList()))}>
                    Очистить Все
                </button>
                <p className="text-xl text-[#ffff]">
                    <h2 className="my-5">Выпал:</h2>
                    {!mustSpin ? dataRaw[prizeNumber].name : "Выбираем..."}
                </p>

            </div>

        );
    }
else{
    return(
    <div className=" mx-auto my-auto max-w-[1174px] p-10 flex flex-col justify-center">
            <h2 className="mx-auto"> Не выбрано ни одного аниме</h2>
    </div>
    )
}
    }

    export default WheelRoulette;