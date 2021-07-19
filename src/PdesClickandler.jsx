// import React from 'react';

// const DesClick = (props) =>{
//     return (
//         <div>
//             <span>{props.counter}</span>
//             <button onClick={props.desHandler}>click me</button>
//         </div>
//     )
// }

// export default DesClick;

import React, { Component } from "react";

class DesClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: "",
      decHandler: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      counter: props.counter,
      decHandler: props.decHandler,
    };
  }
  render() {
    let state = this.state;
    return (
      <>
        <label>{state.counter}</label>
        <button onClick={state.decHandler}>click me!</button>
      </>
    );
  }
}
export default DesClick;