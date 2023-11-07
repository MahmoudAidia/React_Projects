import "./ErrorModal.css";
import React from "react";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal-container">
      <h1 className="header">{props.message}</h1>
      <button onClick={props.onClick} className="modal-btn">
        {" "}
        OK
      </button>
    </div>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdrop")
      )}
      {ReactDom.createPortal(
        <ModalOverlay message={props.message} onClick={props.onConfirm} />,
        document.getElementById("modal-overlay")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
