"use client";
import React from "react";
import { createContext, useContext, useState } from "react";

// It's good to be explicit when declaring React state type.
// Not necessary in very simple cases where obvious.
// Return type is implicity defined. Think hard about initialization.
// type ThemeContextType = {
//   darkTheme: boolean,
//   toggleTheme: () => void
// }
// const ThemeContext = createContext<ThemeContextType>({
//   darkTheme: false,
//   toggleTheme: () => {},
// });
const ThemeContext = createContext({
  darkTheme: false,
  toggleTheme: () => {},
});

type ThemeProviderProps = { children: React.ReactNode };

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

  // It's good to be explicit when declaring React state type.
  // Not necessary in very simple cases where obvious.
  // const [darkTheme, setDarkTheme] = useState<boolean | undefined>();
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => setDarkTheme(!darkTheme);
  const value = { darkTheme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
