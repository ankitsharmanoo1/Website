import { useState } from "react";
import nameWhite from "../formsIcons/name1.png";
import nameBlack from "../formsIcons/nameBlackLogo.png";
import { useTheme } from "../../../Context/ThemeContext";


// eslint-disable-next-line react/prop-types
const Name = ({onChange}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [name,setName] = useState("");

  const { isDarkTheme } = useTheme(); // Access theme context

  const handleChange = (e) => {
    const newValue = e.target.value;
    setName(newValue); // Update the local state
    onChange?.(newValue); // Call the parent-provided onChange handler, if any
  };

  return (
    <div
      role="region"
      aria-label="Name input section"
      className={`flex items-center p-4 rounded-xl border-2 w-[230px] h-[58px] md:h-auto md:w-[580px] relative transition-all duration-300 ${
        isDarkTheme
          ? "border-white text-white"
          : "border-black text-black"
      }`}
    >
      {/* Icon */}
      <img
        loading="lazy"
        src={isDarkTheme ? nameWhite : nameBlack}
        alt="Email"
        className={`absolute left-2 transition-transform duration-300 ${
          isFocused ? "-translate-x-10" : "translate-x-0"
        } w-[22px]`}
      />

<label
        htmlFor="MessageInput"
        className={`absolute left-12 text-2xl font-medium transition-all duration-300 ${
          isDarkTheme ? "text-white" : "text-black"
        } ${
          isFocused || name
            ? "-translate-y-5 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        Name
      </label>

      {/* Animated Placeholder */}
      {isFocused && !name && (
        <span
          className={`absolute left-12 text-2xl font-medium transition-opacity duration-500 animate-fade ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          Enter Your Name
        </span>
      )}


      {/* Input */}
      <input
        type="name"
        id="nameInput"
        required= "true"
        name="first_name"
        value={name}
        className={`flex-1 text-2xl font-medium bg-transparent border-none outline-none placeholder-gray-500 ${
          isDarkTheme ? "text-white" : "text-black"
        }`}
        aria-label="Enter email"
        onFocus={() => setIsFocused(true)}
        onBlur={() => !name && setIsFocused(false)}
        onChange={handleChange}
      />
    </div>
  );
};

export default Name;