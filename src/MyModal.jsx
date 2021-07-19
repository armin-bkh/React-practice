import React from "react";
import { createPortal } from "react-dom/cjs/react-dom.development";
import { useState } from "react/cjs/react.development";
import ModalInp from "./ModalInput";
import MyBtnModal from "./MyBtnModal";
import './Modal.scss';
import { CSSTransitionGroup } from 'react-transition-group';

const Modal = () => {
  const [close, setClose] = useState(false);
  const nameRef = React.createRef();
  const passwordRef = React.createRef();

  const submitHandler = (e) => {
    e.preventDefault();
    nameRef.current.value = "";
    passwordRef.current.value = "";
    nameRef.current.focus();
  };  
  // const closeHandler = () => {
  //   setClose(true);
  // };

  if (!close) {
    return createPortal(
      <section>    
        <form onSubmit={submitHandler}>
        <header className="header">
          <h3 className="title">LogIn</h3> 
          {/* <button className="btn" onClick={closeHandler}>close</button> */}
        </header>
          <ModalInp ref={nameRef} label="Username:" placeHolder="Username..." />
          <ModalInp
            ref={passwordRef}
            label="Password:"
            placeHolder="Password..."
          />
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>
      ,
      document.getElementById("modal")
    );
  } else {
    return <></>;
  }
};

export default Modal;
