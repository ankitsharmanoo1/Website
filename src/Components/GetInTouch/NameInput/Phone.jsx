import { useState } from "react";
import mobWhite from "../formsIcons/mobileicon.png";
import mobBlack from "../formsIcons/phoneBlackLogo.png";
import { useTheme } from "../../../Context/ThemeContext";

// eslint-disable-next-line react/prop-types
const Phone = ({onChange}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [phone, setPhoneNum] = useState("");

  const { isDarkTheme } = useTheme(); // Access theme context
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setPhoneNum(newValue);
    onChange?.(newValue); 
  };

  return (
    <div
      role="region"
      aria-label="phone input section"
      className={`flex items-center p-4 rounded-xl border-2 w-[230px] h-[58px] md:h-auto md:w-[580px] relative transition-all duration-300 ${
        isDarkTheme
          ? "border-white text-white"
          : "border-black text-black"
      }`}
    >
      {/* Icon */}
      <img
        loading="lazy"
        src={isDarkTheme ? mobWhite : mobBlack}  
        alt="Phone"
        className={`absolute left-2 transition-transform duration-300 ${
          isFocused ? "-translate-x-10" : "translate-x-0"
        } w-[22px]`}
      />

      {/* Label */}
      <label
        htmlFor="MessageInput"
        className={`absolute left-12 text-2xl font-medium transition-all duration-300 ${
          isDarkTheme ? "text-white" : "text-black"
        } ${
          isFocused || phone
            ? "-translate-y-5 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        Phone
      </label>

      {/* Animated Placeholder */}
      {isFocused && !phone && (
        <span
          className={`absolute left-12 text-2xl font-medium transition-opacity duration-500 animate-fade ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          Enter Your Phone number
        </span>
      )}


      {/* Input */}
      <input
        type="number"
        id="numberInput"
        required= "true"
        value={phone}
        name="mobile" 
        className={`flex-1 text-2xl font-medium bg-transparent border-none outline-none placeholder-gray-500 ${
          isDarkTheme ? "text-white" : "text-black"
        }`}
        aria-label="Enter Message"
        onFocus={() => setIsFocused(true)}
        onBlur={() => !phone && setIsFocused(false)}

        onChange={handleChange}
      />
    </div>
  );
};

export default Phone;

















