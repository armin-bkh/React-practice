import React, { useState } from "react";
import HOCModal from "./HOCModal";
const ModalBtn = (props) => {
  const [update, setUpdate] = useState();
  const btnRef = React.createRef();
  const change = () =>{
    setUpdate(!update);
    if(!update) btnRef.current.innerHTML = "close";
    else btnRef.current.innerHTML = "LogIn";
  }
  return (
    <button className="modal-btn"
      onClick={()=>{
        props.toggleM()
        change()
        }
      }
      ref={btnRef}
    >
      LogIn
    </button>
  );
};

export default HOCModal(ModalBtn);
