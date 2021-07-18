import React, { Component } from "react";
import DesHOC from "./DesHigherOrderCom";

class DesClick extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.method}>
        {this.props.name} click: {this.props.counter}
      </button>
    );
  }
}
export default DesHOC(DesClick, 1);








// class DesClick extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <button onClick={this.props.method}>
//          click: {this.props.counter}
//       </button>
//     );
//   }
// }

// class DesHover extends Component {
//   constructor(props) {
//     super(props);
//   }
//   // delaychange = () => {
//   //   setTimeout(() => {
//   //     this.props.method();
//   //   }, 1000);
//   // };
//   render() {
//     return (
//       <h1
//         // onMouseOver={this.delaychange}
//         onMouseOver={this.props.method}
//       >
//          hover: {this.props.counter}
//       </h1>
//     );
//   }
// }
// const NewC = DesHOC(DesClick, DesHover, 1)
// export default NewC;