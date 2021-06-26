import React, { useEffect } from "react";
import { Color, FontWeight, useTheme, FontSize } from "theme";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  fontWeight?: keyof FontWeight;
  fontSize?: keyof FontSize;
  color?: keyof Color;
}

export const Text: React.FC<Props> = ({
  fontWeight = "standard",
  fontSize = "standard",
  color = "light",
  children,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <span
      style={{
        fontSize: theme.fontSize[fontSize],
        fontWeight: theme.fontWeight[fontWeight],
        color: theme.color[color],
      }}
      {...rest}
    >
      {children}
    </span>
  );
};
