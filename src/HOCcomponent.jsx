import React, { Component } from "react";
import DesClick from "./DesClick";
import DesHover from "./DesHover";
// import NewC from "./DesClick";

class HOCApp extends Component {
  constructor() {
    super();
    this.state = {
        run: true
    }
  }
  render() {
    return (
      <div>
        <DesClick name="Armin" />
        <DesHover library="React" />

        
        {/* <NewC /> */}
      </div>
    );
  }
}

export default HOCApp;
