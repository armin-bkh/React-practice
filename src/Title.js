import React from "react";
import ReactDOM from 'react-dom';



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


class Title extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.content.name,
      age: this.props.content.age
    }
  }
  render(){
    return (
      <h1 className="title">I am {this.state.name} and i am {this.state.age} years old</h1>
    )
  }
}


export default Title; 