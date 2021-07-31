import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { backdrop } from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");
const div = document.createElement("div");

const Modal = forwardRef((props, ref) => {
  const modalRef = useRef(null);
  const [show, setShow] = useState(props.show);

  useImperativeHandle(ref, () => ({
    hideModal() {
      setShow(false);
    },
  }));

  useEffect(() => {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.appendChild(div);
    return () => {
      modalRoot.removeChild(div);
    };
  }, []);

  useEffect(() => {
    const onClickOutsideHandler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", onClickOutsideHandler);
    return () => {
      document.removeEventListener("mousedown", onClickOutsideHandler);
    };
  }, [modalRef]);

  useEffect(() => {
    setShow(props.show);
  }, [props]);

  return show ? (
    <div className={`${backdrop} ${props.className}`}>
      <div ref={modalRef}>{props.children}</div>
    </div>
  ) : null;
});
export default Modal;
