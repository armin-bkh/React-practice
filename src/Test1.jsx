import exp from 'constants';
import React, {Component} from 'react';


class TestC extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: ''
        }
    }
    static getDerivedStateFromProps(props, state){
        return{content: props.content}
    }
    render(){
        const content = this.state.content;
        if(content==="Milad") throw new "My Error";
        return(
            <h1>hello {content}</h1>
        )
    }
}
export default TestC;