import React from "react";

interface Props {
  content?: string;
  color?: "light" | "dark";
}

export const Loader: React.FC<Props> = ({ content, color = "light" }) => {
  return <div>{content ? <div className="text">{content}</div> : null}</div>;
};
