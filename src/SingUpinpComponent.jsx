import React, { Component } from "react";

class SignUpinp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      id: "",
      name: "",
      HTMLFor: "",
      lbl: "",
      value: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      type: props.type,
      id: props.id,
      name: props.name,
      HTMLFor: props.HTMLFor,
      lbl: props.lbl,
    };
  }
  changeHandler = (e) =>{
    this.setState({
        value: e.target.value
    });
  }
  render() {
    return (
      <React.Fragment>
        <label className="lbl" htmlFor={this.state.HTMLFor}>
          {this.state.lbl}:
        </label>
        <input
          value={this.state.value}
          className="inp"
          type={this.state.type}
          id={this.state.id}
          name={this.state.name}
          onChange={this.changeHandler}
        />
      </React.Fragment>
    );
  }
}
export default SignUpinp;
