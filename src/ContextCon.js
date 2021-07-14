import React, {Component} from 'react';
import {UseProvider, UseConsumer} from './Context';
import UseContext from './Context';
import Homepage from './Routaddress1';


class ContextCon extends Component{
    constructor(){
        super();
    }
    static contextType = UseContext;
    render(){
        return(
            <div>
            {/* <UseProvider value="Armin"> */}
                {this.context}
                <Homepage />
            {/* </UseProvider> */}
            {/* <UseProvider value="Alireza">
                <Homepage />
            </UseProvider> */}
            </div>
        )
    }
}
export default ContextCon;