import React from "react";
import { IButton } from "./button";

interface StateStyles {
  default?: string;
  hover?: string;
  active?: string;
}
interface Props {
  background?: StateStyles;
  color?: StateStyles;
  active?: boolean;
}
export const BasicButton: IButton<Props> = ({
  background,
  color,
  onClick,
  children,
  active,
}) => {
  return (
    <button
      className={active ? "active" : ""}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <style jsx>{`
        button {
          border: 0;
          outline: 0;
          background: ${background?.default || "#666"};
          color: ${color?.default || "#fff"};
          padding: 10px;
          border-radius: 10px;
          display: inline-block;
          margin-right: 5px;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1em;
          cursor: pointer;
        }
        button:hover {
          background: ${background?.hover || "#333"};
          color: ${color?.hover || "#fff"};
        }
        button.active {
          background: ${background?.active || "transparent"};
          color: ${color?.active || "#333"};
          cursor: default;
        }
      `}</style>
      {children}
    </button>
  );
};
