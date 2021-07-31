import React, { useRef } from "react";
import Button from "../../Button/Button";
import Card from "../../Card/Card";
import Modal from "../Modal";
import classes from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, show, onModalClosed, ...props }) => {
  const errorModalRef = useRef();
  if (props.children)
    return <Card className={classes.modal}>{props.children}</Card>;

  const closeModalHandler = () => {
    errorModalRef.current.hideModal();
    onModalClosed();
  };

  return (
    <Modal show={show} ref={errorModalRef}>
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
    </Modal>
  );
};

export default ErrorModal;
