// import logo from './logo.svg';
// import './App.css';

import render from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Title from "./Title";

/*
function App(props) {
  return (
    <nav className="navbar">
      <h3 className="logo">{props.content}</h3>
      <ul className="navbar-nav">
        <li>
          <a href="#">Home {5 + 5}</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
}
*/

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: props.content,
//       color: "red",
//     };
//   }
//   render() {

//     const names = {
//       name1: "Rmin",
//       name2: "Reza"
//     }
//     return (
//       <React.Fragment>
//         <nav className="navbar">
//           <h3 className="logo">{this.state.name}</h3>
//           <ul className="navbar-nav">
//             <li>
//               <a href="#">Home {5 + 5}</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Login</a>
//             </li>
//           </ul>
//         </nav>
//          {/* <Title content={this.state.name} /> */}
//         <Title content={names} />
//       </React.Fragment>
//     );
//   }
// }

// function App(props){
//   return (
//     <nav className="navbar">
//       <h3 className="logo">{props.content}</h3>
//       <ul className="navbar-nav">
//         <li><a href="#">Home</a></li>
//         <li><a href="#">Contact</a></li>
//         <li><a href="#">About us</a></li>
//         <li><a href="#">Login</a></li>
//       </ul>
//     </nav>
//   )
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.content,
      age: 17,
    };
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <h3 className="logo">{this.state.name}</h3>
          <ul className="navbar-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
        <Title content={this.state} />
      </React.Fragment>
    );
  }
}

export default App;
