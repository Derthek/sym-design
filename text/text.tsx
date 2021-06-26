import React, { useEffect } from "react";
import { Color, FontWeight, useTheme, FontSize } from "theme";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  fontWeight?: keyof FontWeight;
  fontSize?: keyof FontSize;
  color?: keyof Color;
}

const Text: React.FC<Props> = ({
  fontWeight = "standard",
  fontSize = "standard",
  color = "dark",
  children,
  ...rest
}) => {
  const theme = useTheme();
  useEffect(() => console.log("effect", theme), [theme]);
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

export default Text;
