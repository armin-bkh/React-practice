import React from "react";
import ReactDOM from 'react-dom';
import './Title.css';


/*
// class Title extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       const name = "Rmin";
//       // return <h1 className="title">Hello {this.props.content}</h1>;
//       // return <h1 className="title">Hello {name}</h1>;
//       return <h1 className="title">Hello {this.props.content.name2}</h1>;
//     }
// }
*/


/*
// class Title extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       name: this.props.content.name,
//       age: this.props.content.age
//     }
//   }
//   render(){
//     return (
//       <h1 className="title">I am {this.state.name} and i am {this.state.age} years old</h1>
//     )
//   }
// }
*/


/*
// function Title(props){
//   return (
//     <h1 className="title">i am {props.name} and i am {props.age} years old</h1>
//   )
// }
*/

class Title extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "Reza",
      age: "24",
      colorR: "yellow",
      colorB: "orange"
    };
  }
  static getDerivedStateFromProps(props, state){
    return {name: props.name};
  }
  componentDidMount(){
    setTimeout(()=> this.setState({
      colorB: "White",
      colorR: "black"
    }),3000);
  }
  render(){
  return (
    <article className="explain">
    <h1 className="title">i am {this.state.name} and i am {this.state.age} years old</h1>
    <h3 className="title">my favorite color is {this.state.colorR}  and i hate {this.state.colorB}</h3>
    <button className="btn" type="button">click me</button>
    </article>
  )
}
}

export default Title; 