import React, { Component } from "react";
import Todoitem from "./Todoitem";
import uuid from "react-uuid";

// class TodoList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       list: [],
//       valinp: "",
//     };
//   }
//   changeHandler = (e) => {
//     this.setState({ valinp: e.target.value });
//   };
//   checkUpdateHandler = (key) => {
//         this.setState((Prevstate)=>{
//             let newList = Prevstate.list.map((Row)=>{
//                 if(Row.key === key){
//                     Row.checked = !Row.checked;
//                 }
//                 return Row;
//             })
//         return {list: newList}
//         })
//   }

//   submitHandler = (e) => {
//     e.preventDefault();
//     if(this.state.valinp){
//     let newItem = {
//       key: uuid(),
//       content: this.state.valinp,
//       checked: false,
//     };
//     let newList;
//     if (this.state.list) {
//       newList = this.state.list;
//     }
//     newList.push(newItem);
//     this.setState({
//       list: newList,
//       valinp: "",
//     });
//     document.getElementById('inp').focus();
//     }
//   };
//   render() {
//     const list = this.state.list.map((Row) => {
//       return (
//         <TodoItem
//           check={Row.checked}
//           val={Row.content}
//           change={this.checkUpdateHandler}
//           key={Row.key}
//           id={Row.key}
//         />
//       );
//     });
//     return (
//       <React.Fragment>
//         <form>
//           <input
//             type="text"
//             value={this.state.valinp}
//             onChange={this.changeHandler}
//             id="inp"
//           />
//           <button type="submit" onClick={this.submitHandler}>
//             Insert
//           </button>
//         </form>
//         {list}
//       </React.Fragment>
//     );
//   }
// }

// export default TodoList;

class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      value: "",
    };
  }
  changeinputHandler = (e) => {
    this.setState({ value: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.value) {
      let newItem = {
        key: uuid(),
        value: this.state.value,
        checked: false,
      };
      let newList = [];
      if (this.state.list) newList = this.state.list;
      newList.push(newItem);
      this.setState({
        list: newList,
        value: "",
      });
      document.getElementById("inp").focus();
    }
  };
  checkupdateHandler = (id) => {
    this.setState((Prevstate) => {
      let newList = Prevstate.list.map((item) => {
        if (item.key === id) {
          item.checked = !item.checked;
        }
        return item;
      });
      return {
          list: newList 
        };
    });
  };
  render() {
    let items = this.state.list.map((item) => {
      return (
        <Todoitem
          id={item.key}
          val={item.value}
          key={item.key}
          check={item.checked}
          checkUpdate={this.checkupdateHandler}
        />
      );
    });
    return (
      <React.Fragment>
        <input
          id="inp"
          type="text"
          value={this.state.value}
          onChange={this.changeinputHandler}
        />
        <button type="submit" onClick={this.submitHandler}>
          Insert
        </button>
        {items}
      </React.Fragment>
    );
  }
}

export default Todolist;
