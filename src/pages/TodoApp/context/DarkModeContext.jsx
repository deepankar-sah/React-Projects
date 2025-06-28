import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Create Context
const DarkModeContext = createContext();

// Custom Hook
export const useDarkMode = () => useContext(DarkModeContext);

// Provider Component for App warpping

export const DarkModeProvider = ({ children }) => {
  // DarkMode State for local storage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
