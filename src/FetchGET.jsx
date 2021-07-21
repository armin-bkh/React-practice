import React, { Component } from "react";

// class Fetch extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//       error: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         return response.json()
//       })
//       .then(result =>{
//           this.setState({
//               data: result
//           })
//       })
//       .catch((err) => {
//         this.setState({
//           error: "an error has been occured",
//         });
//       });
//   }
//   render() {
//     let data = this.state.data.length ? this.state.data.map((item) => <p key={item.id}>{item.title}</p>) : this.state.error;
//     return (
//       <div>
//         <h1>employees</h1>
//         {data}
//       </div>
//     );
//   }
// }

class Fetch extends Component {
  constructor() {
    super();
    this.state = {
      dataList: [],
      error: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplacseholder.typicode.com/posts")
      .then((Response) => Response.json())
      .then((result) => this.setState({ dataList: result }))
      .catch((err) => this.setState({ error: "an error has been occured" }));
  }
  render() {
    let data = this.state.dataList.length
      ? this.state.dataList.map((item) => <p key={item.id}>{item.title}</p>)
      : this.state.error;
    return (
      <>
        <h1>Hello data</h1>
        {data}
      </>
    );
  }
}
export default Fetch;
