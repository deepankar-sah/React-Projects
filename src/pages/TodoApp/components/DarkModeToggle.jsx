import { useDarkMode } from "../context/DarkModeContext";
import { motion } from "framer-motion";

export default function DarkModeToggle(){
    // Use Context
    const {darkMode, setDarkMode} = useDarkMode();

    return(
        <motion.button
        onClick={()=>  setDarkMode(!darkMode)}
        whileTap={{scale: 0.9}}
        className="p-2 rounded-full bg-gray-200 text-white dark:bg-gray-700">
            {darkMode ? (<p>🌞Light Mode</p>) :(<p>🌕Night Mode</p>)}
        </motion.button>
    );
};