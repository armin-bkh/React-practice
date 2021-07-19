import React, { Component } from "react";
import ChildReg from "./ChildReg";
import ChildPure from "./ChildPure";

class Appcomponent extends Component {
  constructor() {
    super();
    this.state = {
      update: false,
      // update: [1,2,3]
      // update: "Reza"
      // update: "jaber"
      // update: 5
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ update: true });
      // this.setState({update: !this.state.update})
      // this.setState((prevState)=>{
      //     return{update: !prevState.update}
      // })
      // this.setState({update: 5})
      // this.setState({update: 10})
      // this.setState({update: "Reza"})
      // this.setState({update: "jaBer"})
      // this.setState({update: false})
      // this.setState({update: [5,2,1]})
    }, 3500);
  }
  render() {
    console.log("Parent");
    return (
      <>
        <h1>Parent Component</h1>
        {/* <ChildReg />
        <ChildPure /> */}
        {/* <ChildPure update={this.state.update}/> */}
        <ChildReg update={this.state.update} />
        <ChildPure update={this.state.update} />
      </>
    );
  }
}

export default Appcomponent;
