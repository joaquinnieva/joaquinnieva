import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.css';

const Modal = (props) => {
  return (
    <div className="modal" onClick={props.onClick}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-button" onClick={props.onClick}>
          ╳
        </button>
        <div className="modal-child">{props.children}</div>
      </div>
    </div>
  );
};

export default function Portal({ children, handleClose }) {
  return ReactDOM.createPortal(<Modal onClick={handleClose}>{children}</Modal>, document.getElementById('modal'));
}
