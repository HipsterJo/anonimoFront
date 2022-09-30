import React from "react";

import CustomInput from "../../input/input";
import { formType } from "../../../models/formType";
import { useAppDispatch } from "../../../redux/store";
import { createAnime } from "../../../redux/slices/cardSlice";
import { useDispatch } from "react-redux";
// _id: string
// name: string;
// imageCard: string;
// discriptionFull: string;
// src: string;
// lastEpisode:number;
// rating: number;
// imageHuge: string
// discriptionBriefly: string
// dataRealese: number
// dataPublish: number
// genre: string[]
// __v: number

const PlaceHolder: formType = {
  name: "",
  imageCard: "",
  discriptionFull: "",
  src: "",
  lastEpisode: 0,
  rating: 0,
  imageHuge: "",
  discriptionBriefly: "",
  dataRealese: 0,
  dataPublish: 0,
  genre: "Введите через запятую",
};

const AddAnimeForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = React.useState<formType>(PlaceHolder);
  const handleClick = () => {
    dispatch(createAnime(input));
  };
  return (
    <div className="w-[80%] mx-auto">
      {Object.entries(input).map(([key, value]) => {
        return (
          <CustomInput
            key={key}
            label={key}
            value=""
            isValidation={true}
            placeholder={value.toString()}
            setValue={(value) => setInput({ ...input, [key]: value })}
          />
        );
      })}
      <button
        className="mx-auto w-[100%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={() => handleClick()}
      >
        Нажми
      </button>
    </div>
  );
};

export default AddAnimeForm;
