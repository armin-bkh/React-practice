// import React from 'react';
// import { createPortal } from 'react-dom';

// const DesHover = (props) =>{
//     return createPortal(
//         <div>
//             <h1>{props.counter}</h1>
//             <span onMouseOver={props.desHandler}>over on me {props.name(true)}</span>
//         </div>,
//         document.getElementById('root2')
//     )
// }
// export default DesHover;

import React, { Component } from "react";

class DesHover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: "",
      func: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      counter: props.counter,
      func: props.decHandler,
    };
  }
  render() {
    let state = this.state;
    return (
      <>
        <h1>{state.counter}</h1>
        <p>
          hover on me: <span onMouseOver={state.func}>{this.props.name}</span>
        </p>
      </>
    );
  }
}

export default DesHover;