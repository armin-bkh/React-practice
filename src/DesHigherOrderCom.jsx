import React, { Component } from "react";

const DesHOC = (OriginalComponenet, number) => {
  class CDesHOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 100,
      };
    }
    desHandler = () => {
      this.setState({
        counter: this.state.counter - number,
      });
    };
    render() {
      return (
        <div>
          <OriginalComponenet
            method={this.desHandler}
            counter={this.state.counter}
            {...this.props}
          />

        </div>
      );
    }
  }
  return CDesHOC;
};
export default DesHOC;










// import React, { Component } from "react";

// const DesHOC = (OriginalComponenet1, OriginalComponenet2, number) => {
//   class CDesHOC extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         counter: 100,
//       };
//     }
//     desHandler = () => {
//       this.setState({
//         counter: this.state.counter - number,
//       });
//     };
//     render() {
//       return (
//         <React.Fragment>
//           <OriginalComponenet1
//             method={this.desHandler}
//             counter={this.state.counter}
//             {...this.props}
//           />
//           <OriginalComponenet2
//             method={this.desHandler}
//             counter={this.state.counter}
//             {...this.props}
//           />
//         </React.Fragment>
//       );
//     }
//   }
//   return CDesHOC;
// };

// export default DesHOC;
