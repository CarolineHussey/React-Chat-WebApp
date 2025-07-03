import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const navigate = useNavigate();

  function onClose(event) {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
export default Modal;
