import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ show, ...props }) => {
  return show ? <div>{props.children}</div> : null;
};

const ModalOverlay = React.forwardRef(({ children, ...props }, ref) => {
  const [show, setShow] = React.useState(props.show);

  React.useImperativeHandle(ref, () => ({
    hideModal() {
      setShow(false);
      props.onModalClosed();
    },
  }));

  React.useEffect(() => {
    setShow(props.show);
  }, [props]);

  const backDropOnClickHandler = () => {
    ref.current.hideModal();
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={backDropOnClickHandler} show={show} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal show={show}> {children} </Modal>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
});
export default ModalOverlay;
