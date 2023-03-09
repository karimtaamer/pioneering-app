import React, { createContext, useState } from "react";

/**The global Theme provider that will handle the changing of the theme from light 
 * to dark and vice-versa
 */

export const ThemeContext = createContext<any>({ theme: "light", undefined });


export const ThemeProvider: React.FC<any> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
