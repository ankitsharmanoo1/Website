import { motion } from "framer-motion";
import NavBar from "../NavBar";
import { useTheme } from "../../Context/ThemeContext";

const Career = () => {

  const { isDarkTheme} = useTheme();

  return (
  
<>

<NavBar/>

    <div className={`flex justify-center items-center h-screen ${isDarkTheme ? 'bg-black text-white' :'bg-white text-black' }`}>
      <motion.h1
        className=" text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
      >
        COMING SOON
      </motion.h1>
    </div>
</>
  );
};

export default Career;
