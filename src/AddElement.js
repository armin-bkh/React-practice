import React, { Component } from "react";
import LogOn from "./Element";
import LogIn from "./Login";
import "./FormAddElement.scss";

class Mycontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      text: 'LogIn',
      btn: 'LogOn'
    };
  }
  submitHandler = (e) => {
    e.preventDefault();
  };
  LogonHandler = () => {
    let show = this.state.show;
    this.setState({
      show: !show,
      text: this.state.btn,
      btn: this.state.text
    });
  };
  render() {
    let ShowEl;
    let hideEl = <LogIn sub={this.submitHandler}/>;
    if (this.state.show === true) {
      ShowEl = <LogOn sub={this.submitHandler}/>;
      hideEl = '';
    }
    return (
      <form>
        <header className="title">
          <h2>{this.state.text}</h2>
          <button className="btn" type="button" onClick={this.LogonHandler}>
            {this.state.btn}
          </button>
        </header>
        <section>
          {ShowEl}
          {hideEl}
        </section>
      </form>
    );
  }
}
export default Mycontainer;
