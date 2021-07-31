import React from "react";
import { backdrop } from "./Backdrop.module.css";

const Backdrop = ({ children, onClick, show, ...props }) => {
  return (
    <React.Fragment>
      {show && (
        <div className={`${backdrop} ${props.className}`} onClick={onClick}>
          {children}
        </div>
      )}
    </React.Fragment>
  );
};

export default Backdrop;
