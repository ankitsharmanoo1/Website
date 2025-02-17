import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import line5 from "./Images/Property 1=Variant2.png";
import { useTheme } from "../../Context/ThemeContext";

const BackgroundAnimation = () => {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const thirdRowRef = useRef(null);

  const { isDarkTheme } = useTheme(); // Access theme state

  useEffect(() => {
    const duration = 1.7; // Duration for one full cycle (in seconds)
    const rows = [firstRowRef.current, secondRowRef.current, thirdRowRef.current];

    rows.forEach((row, index) => {
      gsap.fromTo(
        row,
        { x: "-100%", y: "-90%" }, // Start with more left space
        {
          x: 0, // Leave space on the left side
          y: 450, // Move vertically to the bottom-left corner
          duration: duration,
          repeat: -1, // Infinite loop
          ease: "linear",
          delay: index * (duration / rows.length), // Stagger each row
        }
      );
    });
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full overflow-hidden  ${
        isDarkTheme ? "bg-[#000000]" : "bg-white"
      }`}
    >
      {/* Row 1 */}
      <div
        ref={firstRowRef}
        className="w-[928px] h-[696px] absolute left-[550px]"
      >
        <img src={line5} alt="Line 1" />
      </div>
    </div>
  );
};

export default BackgroundAnimation;
