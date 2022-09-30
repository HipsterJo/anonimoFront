import React from "react";

import CustomInput from "../../input/input";
import { formType } from "../../../models/formType";
import { useAppDispatch } from "../../../redux/store";
import { createAnime } from "../../../redux/slices/cardSlice";
import { useDispatch } from "react-redux";
import { formGenreType } from "../../../models/formGenreType";
import { createGenre } from "../../../redux/slices/genresSlice";


const TestGenre: formGenreType = {
    param: "test",
    name: "test"
};

const AddGenreForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = React.useState<formGenreType>(TestGenre);
  const handleClick = () => {
    dispatch(createGenre(input));
  };
  return (
    <div className="w-[80%] mx-auto">
      {Object.entries(input).map(([key, value]) => {
        return (
          <CustomInput
            key={key}
            label={key}
            value={value}
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

export default AddGenreForm;
