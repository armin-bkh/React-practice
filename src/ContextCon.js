import React, {Component} from 'react';
import {UseProvider} from './Context';
import { UseContext } from './Context';
import Homepage from './Routaddress1';
import Www from './Routaddress4';

class ContextCon extends Component{
    constructor(){
        super();
        this.state = {
            colors: {
            colorLight: '#faf',
            ColorDark: '#000'
            },
            val2: "varzesh3"
        }
    }
    render(){
        return (
            <div>
            <h1>Hello World</h1>
            <UseProvider value={this.state}>
                <Homepage />
                
            </UseProvider>
            <UseProvider value="Toplearn">
            <Www />
            </UseProvider>
            </div>
        )
    }
}
export default ContextCon;