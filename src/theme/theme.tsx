import React, { useContext, useMemo } from "react";
import { ThemeProps, ThemeProviderProps } from "./types";
import merge from "lodash/merge";
import cloneDeep from "lodash/cloneDeep";

export const baseTheme: ThemeProps = {
  color: {
    light: "#333",
    dark: "white",
  },
  fontSize: {
    small: "10px",
    standard: "14px",
    medium: "20px",
    big: "24px",
  },
  fontWeight: {
    light: 200,
    standard: 400,
    medium: 600,
    bold: 800,
  },
  primaryColor: "#eb5757",
};

export const mergeTheme = (theme: ThemeProps) =>
  merge(cloneDeep(baseTheme), theme);

const ThemeContext = React.createContext<ThemeProps>(baseTheme);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  // console.log({ theme, baseTheme });
  const value = useMemo(() => mergeTheme(theme), [theme]);
  // console.log({ theme, baseTheme, value });
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
