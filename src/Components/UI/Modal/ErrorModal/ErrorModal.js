import React, { useRef } from "react";
import Button from "../../Button/Button";
import Card from "../../Card/Card";
import ModalOverlay from "../ModalOverlay";
import classes from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, show, onModalClosed, ...props }) => {
  const errorModalRef = useRef();
  if (props.children)
    return <Card className={classes.modal}>{props.children}</Card>;

  const closeModalHandler = () => {
    errorModalRef.current.hideModal();
  };

  return (
    <ModalOverlay show={show} ref={errorModalRef} onModalClosed={onModalClosed}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={closeModalHandler}>Okay</Button>
        </footer>
      </Card>
    </ModalOverlay>
  );
};

export default ErrorModal;
