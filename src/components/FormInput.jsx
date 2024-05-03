import { useState } from "react";

/* eslint-disable react/prop-types */
const FormInput = ({ type = "text", id, inputStyle, title, ...props }) => {
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative" {...props}>
      <input
        type={type}
        id={id}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => inputValue.trim().length == 0 && setIsActive(false)}
        className="w-full px-5 pt-[22px] pb-[10px] border border-solid border-[#E5E5E5] rounded text-base text-[#222222] transition-all duration-200"
        style={inputStyle}
      />
      <label
        htmlFor={id}
        className="absolute transform left-5 text-base origin-top-left transition-all duration-200"
        style={{
          top: isActive ? "4px" : "16px",
          transform: isActive ? "scale(0.6)" : "none",
          textTransform: isActive ? "uppercase" : "none",
        }}
      >
        {title}
      </label>
    </div>
  );
};

export default FormInput;
