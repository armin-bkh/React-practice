import React, {Component} from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let style = {}
        if(this.props.check === true){
          style = {
              textDecoration: "line-through"
          } 
        }
        return (
            <div style={style}>
                <input type="checkbox" checked={this.props.check} onChange={() => this.props.change(this.props.id)} />
                <span>{this.props.val}</span>
            </div>
        )
    }
}

export default TodoItem;