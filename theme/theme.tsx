import React, { useContext } from "react";
import { baseTheme } from "./baseTheme";
import { ThemeProps, ThemeProviderProps } from "./types";

const ThemeContext = React.createContext<ThemeProps>(baseTheme);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;

export const useTheme = () => useContext(ThemeContext);
