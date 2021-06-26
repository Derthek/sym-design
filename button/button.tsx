import React from "react";

export interface Props {
  className?: string;
  label?: string;
  onClick: () => void;
  color?: "green" | "red" | "blue" | "gray" | "orange";
  size?: "small" | "standard" | "medium" | "big";
  disabled?: boolean;
  loading?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  invisible?: boolean;
}

export const Button: React.FC<Props> = ({
  label = "",
  onClick,
  color = "",
  className = "",
  disabled,
  size = "standard",
  loading = false,
  leftIcon,
  rightIcon,
}) => (
  <button
    className={`button color-${color} size-${size} ${className}`}
    onClick={onClick}
    disabled={disabled || loading}
  >
    <>
      {leftIcon ?? <div></div>}
      <div className="Label">{label}</div>
      {rightIcon ?? <div></div>}
    </>
  </button>
);

export default Button;
