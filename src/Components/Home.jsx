import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTheme } from "../Context/ThemeContext";

const Home = () => {
  const beTheRef = useRef(null);
  const nextGenRef = useRef(null);
  const innovatorRef = useRef(null);
  
  const { isDarkTheme } = useTheme(); // Access theme state and toggle function

  useEffect(() => {
    const beThe = beTheRef.current;
    const nextGen = nextGenRef.current;
    const inno = innovatorRef.current;

    if (!beThe || !nextGen || !inno) return; // Debugging: Make sure refs are set

    // Set initial positions for "Be The" and "Next Gen"
    gsap.set(beThe, { opacity: 1, x: -700 });
    gsap.set(nextGen, { opacity: 1, x: 700 });

    // Set initial size and position for "Innovator"
    gsap.set(inno, {
     x: [-4600, 9600],
      y: -3750,
    
      letterSpacing:"530px",
      opacity: 1,
      width: "100vw", // Ensure it covers width
      height: "100vh", 
      // top:"-40px",
      fontSize: "6978px",
    });

    // Animate "Be The" text from left to right
    gsap.to(beThe, {
      x: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power3.out",
    });

    // Animate "Next Gen" text from right to left
    gsap.to(nextGen, {
      x: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power3.out",
    });

    // Animate "Innovator" text (from large to normal size)

    gsap.to(inno, {
      y: 0,
      x: [0,0],
  
      opacity: 1,
      width: "auto",
      height: "auto",
      fontSize: "6rem", // Final size
      delay: 1.5,
      letterSpacing: "0px", // Animate letter spacing properly
      duration: 3,
      ease: "power3.out",
});
  }, []);

  return (
    <div className={`${isDarkTheme ? "bg-[#000000] text-white" : "bg-white text:black" } z-50 mt-9 `}
    >
      <div className="w-[1566px] h-[692px] max-auto top-24  gap-[58px] flex flex-col items-start relative z-10"
              style={{
        background: "linear-gradient(to right, rgba(0, 0, 0, 1)100% , rgba(0, 0, 0, ) 0%)",
      }}
      >
        <div className="relative self-stretch "
        
        
        >
          <div className={`flex flex-col w-[40%]   items-start   gap-20  relative `}
              style={ isDarkTheme ?{
        background: "linear-gradient(to right, rgba(0, 0, 0, 1)60% , rgba(0, 0, 0, 0))",
      }:{background: "linear-gradient(to right, rgba(255,255,255,1) 60%, rgba(255,255,255,0))"}}
          
          >
    

            <div
              className={`box font-thin ${
                isDarkTheme ? "text-white" : "text-black"
              } text-8xl ml-32`}
              ref={beTheRef}
            >
              BE THE
            </div>
            {/* "Next Gen" text */}
            <div
              className={` font-thin ${
                isDarkTheme ? "text-white" : "text-black"
              } text-8xl ml-32`}
              ref={nextGenRef}
            >
              NEXT GEN
            </div>
            {/* "Innovator" text */}
            <div
              className={` font-thin ${
                isDarkTheme ? "text-white" : "text-black"
              } text-8xl ml-32`}
              ref={innovatorRef}
            >
              INNOVATOR
            </div>
          </div>
        </div>

  <div className="w-full flex flex-col items-center">
    <button className={`w-[105px] h-[39px] text-base font-bold ${
              isDarkTheme
                ? "bg-white text-black hover:bg-gray-300"
                : "bg-black text-white hover:bg-gray-700"
            } rounded-md`}>
      Know More
    </button>
</div>
      </div>
    </div>
  );
};

export default Home;
