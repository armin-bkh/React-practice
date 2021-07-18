import React, { Component } from "react";
import DesHOC from "./DesHigherOrderCom";

class DesHover extends Component {
  constructor(props) {
    super(props);
  }
  // delaychange = () => {
  //   setTimeout(() => {
  //     this.props.method();
  //   }, 1000);
  // };
  render() {
    return (
      <h1
        // onMouseOver={this.delaychange}
        onMouseOver={this.props.method}
      >
        {this.props.library} hover: {this.props.counter}
      </h1>
    );
  }
}

export default DesHOC(DesHover, 10);