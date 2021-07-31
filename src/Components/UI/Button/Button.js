import React from "react";
import { button } from "./Button.module.css";

const Button = ({ type, onClick, ...props }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${button} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
