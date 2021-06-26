import React from "react";

export interface ThemeProps {
  color: Color;
  fontSize: FontSize;
  fontWeight: FontWeight;
  primaryColor: string;
}

export interface Color {
  dark: string;
  light: string;
}

export interface FontSize {
  big: string;
  medium: string;
  small: string;
  standard: string;
}

export interface FontWeight {
  bold: number;
  light: number;
  medium: number;
  standard: number;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme: ThemeProps;
}
