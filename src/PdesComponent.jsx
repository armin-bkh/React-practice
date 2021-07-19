// import React, { Component } from 'react';

// class PdesComponent extends Component{
//     constructor(){
//         super();
//         this.state = {
//             counter: 100
//         }
//     }
//     decrementHandler = () =>{
//         this.setState((prevState) => {
//             return {counter: prevState.counter - 1}
//         })
//     }
//     render(){
//         return (
//             // this.props.render(this.decrementHandler, this.state.counter)
//             this.props.children(this.decrementHandler, this.state.counter)
//         )
//     }
// }

// export default PdesComponent;

import React, { Component } from "react";

class PdesComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1000,
    };
  }
  decrementHandler = (num) => {
    this.setState((prevState)=>{
      return { counter: prevState.counter - num }
    });
  };
  render() {
    return this.props.render(this.decrementHandler, this.state.counter);
  }
}

export default PdesComponent;
