import React from "react";

type CustomInputProps = {
  value: any;
  placeholder: string;
  setValue: (value: string) => void;
  label: string;
  isValidation: boolean;
};

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { value, placeholder, setValue } = props;
  return (
    <div className="mb-6 ">
      <label className="block mb-2 text-xl font-bold text-white">
        {props.label}
      </label>
      <input
        className="hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default CustomInput;
