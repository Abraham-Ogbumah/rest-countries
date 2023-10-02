import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const useTheme = () => {
  const contextValue = useContext(ThemeContext);
  
  if (!contextValue) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return contextValue;
};

export default useTheme;
