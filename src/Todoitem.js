import React, {Component} from 'react';

// class TodoItem extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         let style = {}
//         if(this.props.check === true){
//           style = {
//               textDecoration: "line-through"
//           } 
//         }
//         return (
//             <div style={style}>
//                 <input type="checkbox" checked={this.props.check} onChange={() => this.props.change(this.props.id)} />
//                 <span>{this.props.val}</span>
//             </div>
//         )
//     }
// }

// export default TodoItem;


class Todoitem extends Component {
    constructor(props){
        super(props);
        this.state = {
            check: '',
            value: '',
            id: ''
        }
    }
    static getDerivedStateFromProps(props, state){
        return {
            check: props.check,
            value: props.val,
            id: props.id
        }
    }
    render(){
        let style;
        if(this.state.check === true){
        style = {
            textDecoration: 'line-through'
        }
        }
        return (
            <div style={style}>
            <input type="checkbox" checked={this.state.check} onChange={()=> {this.props.checkUpdate(this.state.id)}} />
            {this.state.value}
            </div>
        )
    }
}

export default Todoitem;