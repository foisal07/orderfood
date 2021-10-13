import React from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

export default function Modal({ children, onClose }) {
  const Backdrop = () => {
    return <div className={classes.backdrop} />;
  };

  const ModalContent = ({ children }) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{children}</div>
      </div>
    );
  };

  const portalElement = document.getElementById("overlay");

  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalContent>{children}</ModalContent>, portalElement)}
    </>
  );
}
