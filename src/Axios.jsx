import React, { Component } from "react";
import axios from "axios";

// class AxiosApp extends Component {
//   constructor() {
//     super();
//     this.state = {
//       list: [],
//       error: "",
//     };
//   }
//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((Response) => {
//         return Response
//       })
//       .then(result => {
//           this.setState({
//               list: result.data
//           })
//       })
//       .catch((err) => {
//         this.setState({
//           error: "an error has been occured",
//         });
//       });
//   }
//   render() {
//     let data = this.state.list.length
//       ? this.state.list.map(item => <p key={item.id}>{item.title}</p>)
//       : this.state.error;
//     return (
//       <>
//         <h1>Hello data</h1>
//         {data}
//       </>
//     );
//   }
// }

// class AxiosApp extends Component {
//   constructor() {
//     super();
//     this.state = {
//       dataList: [],
//       error: "",
//     };
//   }
//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((Response) => this.setState({ dataList: Response.data }))
//       .catch((err) => this.setState({ error: "an error has been occured" }));
//   }
//   render() {
//     let data = this.state.dataList.length
//       ? this.state.dataList.map((item) => <p key={item.id}>{item.title}</p>)
//       : this.state.error;
//     return (
//       <>
//         <h1>Hello data</h1>
//         {data}
//       </>
//     );
//   }
// }

// class AxiosApp extends Component {
//       constructor() {
//         super();
//         this.state = {
//           name: '',
//           email: '',
//           password: ''
//         };
//       }
//       changeHandler = (e) =>{
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//       }
//       submitHandler = (e) =>{
//         e.preventDefault();
//         axios
//           .post("https://3f6b7e26-6d08-4891-af48-73572a8da292.mock.pstmn.io/user", this.state)
//           .then((response) => {
//               console.log(response.status)
//           })
//           .catch((err) => {
//             alert(err)
//           });
//       }
//       render() {
//         return (
//           <form onSubmit={this.submitHandler} method="POST">
//               <div>
//                   <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
//               </div>
//               <div>
//                   <input type="email" name="email" value={this.state.email} onChange={this.changeHandler} />
//               </div>
//               <div>
//                   <input type="text" name="password" value={this.state.password} onChange={this.changeHandler} />
//               </div>
//               <button type="submit">submit</button>
//           </form>
//         );
//       }
//     }

class AxiosApp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitHandler = (e) => {
    e.preventDefault();
    axios
    .post("https://3f6b7e26-6d08-4891-af48-73572a8da292.mock.pstmn.io/user", this.state)
    .then((response) => {
        console.log(response)
        alert("successful\n" + response.status)
    })
    .catch((err) => {
        return alert("an error has been occured\n" + err);
    })
  }
  render() {
    return (
      <form onSubmit={this.submitHandler} method="POST">
        <div>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
        </div>
        <button type="submit">send</button>
      </form>
    );
  }
}
export default AxiosApp;