import { useState } from "react";
import { useTheme } from "../../../Context/ThemeContext";
import messageWhite from "../formsIcons/tabler_message.png";
import messageBlack from "../formsIcons/messageBlackLogo.png";

// eslint-disable-next-line react/prop-types
const Message = ({ onChange }) => {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const { isDarkTheme } = useTheme(); // Access theme context

  const handleChange = (e) => {
    const newValue = e.target.value;
    setMessage(newValue); // Update the local state
    onChange?.(newValue); // Call the parent-provided onChange handler, if any
  };

  return (
    <div
      role="region"
      aria-label="message input section"
      className={`relative flex items-center p-4 rounded-xl border-2 w-[230px] h-[58px] md:h-auto md:w-[580px] transition-all duration-300 ${
        isDarkTheme ? "border-white text-white" : "border-black text-black"
      }`}
    >
      {/* Icon */}
      <img
        loading="lazy"
        src={isDarkTheme ? messageWhite : messageBlack}
        alt="Message"
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
          isFocused || message
            ? "-translate-y-5 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        Message
      </label>

      {/* Animated Placeholder */}
      {isFocused && !message && (
        <span
          className={`absolute left-12 text-2xl font-medium transition-opacity duration-500 animate-fade ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          Enter Your Message
        </span>
      )}

      {/* Input */}
      <input
        type="text"
        required
        id="MessageInput"
        value={message}
        name="description"
        className={`flex-1 text-2xl font-medium bg-transparent border-none outline-none placeholder-transparent ${
          isDarkTheme ? "text-white" : "text-black"
        }`}
        aria-label="Enter Message"
        onFocus={() => setIsFocused(true)}
        onBlur={() => !message && setIsFocused(false)}
        onChange={handleChange}
      />
    </div>
  );
};

export default Message;
