import { useEffect, useRef } from "react";
import BlackAnimation from "../../../public/images/BlackAnimation.mp4";
import WhiteAnimation from "../../../public/images/WhiteHome.mp4";
import { useTheme } from "../../Context/ThemeContext";

const AnimationVideo = () => {
  const { isDarkTheme } = useTheme(); // Access theme state and toggle function
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 4000); // 3-second delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [isDarkTheme]);

  return (
    <div className="w-[1959.11px] h-[1102px] absolut right-0 pb-96 opacity-100 -mt-8 top-52 left-0">
      <video
        ref={videoRef}
        key={isDarkTheme ? "black" : "white"} // Add key to force re-render
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source
          src={isDarkTheme ? BlackAnimation : WhiteAnimation}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AnimationVideo;
