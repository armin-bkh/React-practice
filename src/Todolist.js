import React, { Component } from "react";
import TodoItem from "./Todoitem";
import uuid from "react-uuid";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      valinp: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ valinp: e.target.value });
  };
  checkUpdateHandler = (key) => {
        this.setState((Prevstate)=>{
            let newList = Prevstate.list.map((Row)=>{
                if(Row.key === key){
                    Row.checked = !Row.checked;
                }
                return Row;
            })
        return {list: newList}
        })
  }

  submitHandler = (e) => {
    e.preventDefault();
    let newItem = {
      key: uuid(),
      content: this.state.valinp,
      checked: false,
    };
    let newList;
    if (this.state.list) {
      newList = this.state.list;
    }
    newList.push(newItem);
    this.setState({
      list: newList,
      valinp: "",
    });
    document.getElementById('inp').focus();
  };
  render() {
    const list = this.state.list.map((Row) => {
      return (
        <TodoItem
          check={Row.checked}
          val={Row.content}
          change={this.checkUpdateHandler}
          key={Row.key}
          id={Row.key}
        />
      );
    });
    return (
      <React.Fragment>
        <form>
          <input
            type="text"
            value={this.state.valinp}
            onChange={this.changeHandler}
            id="inp"
          />
          <button type="submit" onClick={this.submitHandler}>
            Insert
          </button>
        </form>
        {list}
      </React.Fragment>
    );
  }
}

export default TodoList;
