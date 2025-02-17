import { useState } from "react";
import { useTheme } from "../../../Context/ThemeContext";
import eamilWhite from "../formsIcons/emailicon.png";
import emailBlack from "../formsIcons/emailBlacklogo.png";

// eslint-disable-next-line react/prop-types
const Email = ({ onChange }) => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const { isDarkTheme } = useTheme(); // Access theme context

  const handleChange = (e) => {
    const newValue = e.target.value;
    setEmail(newValue); // Update the local state
    onChange?.(newValue); // Call the parent-provided onChange handler, if any
  };

  return (
    <div
      role="region"
      aria-label="message input section"
      className={`relative flex items-center p-4 rounded-xl border-2 w-[580px] transition-all duration-300 ${
        isDarkTheme ? "border-white text-white" : "border-black text-black"
      }`}
    >
      {/* Icon */}
      <img
        loading="lazy"
        src={isDarkTheme ? eamilWhite : emailBlack}
        alt="Message"
        className={`absolute left-2 transition-transform duration-300 ${
          isFocused ? "-translate-x-10" : "translate-x-0"
        } w-[22px]`}
      />

<label
        htmlFor="MessageInput"
        className={`absolute left-12 text-2xl font-medium transition-all duration-300 ${
          isDarkTheme ? "text-white" : "text-black"
        } ${
          isFocused || email
            ? "-translate-y-5 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        Email
      </label>

      {/* Animated Placeholder */}
      {isFocused && !email && (
        <span
          className={`absolute left-12 text-2xl font-medium transition-opacity duration-500 animate-fade ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          Enter Your Email
        </span>
      )}

      {/* Input */}
      <input
        type="email"
        required= "true"
        id="emailInput"
        value={email}
        name="email"
        className={`flex-1 text-2xl font-medium bg-transparent border-none outline-none placeholder-transparent ${
          isDarkTheme ? "text-white" : "text-black"
        }`}
        aria-label="Enter Email"
        onFocus={() => setIsFocused(true)}
        onBlur={() => !email && setIsFocused(false)}
        onChange={handleChange}
      />

      <style>{`
        @keyframes fadeAnimation {
          0% {
            opacity: 1;

          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fade {
          animation: fadeAnimation 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Email;
