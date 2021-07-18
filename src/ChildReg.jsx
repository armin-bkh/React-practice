import React, {Component} from 'react';

class ChildReg extends Component{
    constructor(){
        super();
    }
    render(){
        console.log("ChildReg");
        return(
            <h1>Regular Component</h1>
        )
    }
}

export default ChildReg;