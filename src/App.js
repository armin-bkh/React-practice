// import logo from './logo.svg';

import render from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
// import Title from "./Title";
import './App.scss';


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


/*
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
//            <Title content={this.state.name} /> 
//         <Title content={names} />
//       </React.Fragment>
//     );
//   }
// }
*/


/*
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
*/



/*
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: this.props.content,
//       age: 17,
//     };
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <nav className="navbar">
//           <h3 className="logo" id="logo">{this.state.name}</h3>
//           <ul className="navbar-nav">
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//             <li>
//               <a href="#">About us</a>
//             </li>
//             <li>
//               <a href="#">Login</a>
//             </li>
//           </ul>
//         </nav>
//         <Title content={this.state} />
//       </React.Fragment>
//     );
//   }
// }
*/


// class Navbar extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       name: "Armin",
//       age: 17,
//       show: true
//     }
//   }
//   delElement = () => {
//     this.setState({show: false});
//   }
//   render(){
//     let obj = {
//       col1: 'red',
//       col2: 'blue'
//   };
//   var title;
//   if(this.state.show){
//     title = <Title name={this.state.name} age={this.state.age} obj={obj} />;
//   }
//   return (
//     <React.Fragment>
//       <nav className="navbar">
//         <h3 className="logo" id="logo">{this.state.name}</h3>
//         <ul className="navbar-nav">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">Contact</a></li>
//           <li><a href="#">About us</a></li>
//           <li><a href="#">Login</a></li>
//         </ul>
//       <button className="btn" type="button" onClick={this.delElement}>Delete</button>
//       </nav>
//       {title}
//     </React.Fragment>
//   )
//   }
// }

// export default Navbar;




class Singup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      age: '',
      select: "benz",
      detail: "this is a validation and form practice"
    }
  }
  changeHandler = (e) =>{
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({
      [nam]: val,
    });
    console.log(val);
  }
  submitHandler = (e) =>{
    e.preventDefault();
    if(Number(this.state.age) && this.state.username){
      alert('your data is correct');
    }else{
      alert('your data is incorrect');
    }
  }
  render(){
    let mess;
    if(this.state.username){
      if(Number(this.state.age))
      mess = <strong>{this.state.username} {this.state.age}</strong>
    }
    else{
      mess = <strong>your data is invalid</strong>;
    }
    return (
      <form onSubmit={this.submitHandler} action="#">
        {mess}
        <input type="text" placeholder="Enter Name..." name="username" onChange={this.changeHandler} />
        <br /> 
        <input type="text" placeholder="Enter Age..." name="age" onChange={this.changeHandler} /> 
        <select value={this.state.select} name="select" onChange={this.changeHandler}>
          <option value="ford">ford</option>
          <option value="bmw">bmw</option>
          <option value="benz">benz</option>
        </select>
        <textarea value={this.state.detail} name="detail" onChange={this.changeHandler} />
        <button type="submit" onChang={this.submitHandler}>submit</button>
      </form>
    );
  }
}


export default Singup;