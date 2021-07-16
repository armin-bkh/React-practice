import React, { Component } from 'react';
import RefInp from './RefInp';

class RefContainer extends Component{
    constructor(){
        super();
        // this.state = {
        //     inp: React.createRef(),
        // }
        // this.inp = null;
        // this.inpasgin = element =>{
        //     this.inp = element;
        // }
        this.componentRef = React.createRef();
    }
    clickHandler = () =>{
        // this.state.inp.current.focus();
        // this.inp.focus();
        // this.componentRef.current.focusInput();
        this.componentRef.current.focus();
    }
    // componentDidMount(){
    //     this.state.inp.current.focus();
    // }
    render(){
        const state = this.state;
        return(
            <div>
                {/* <input type="text" ref={state.inp} /> */}
                <RefInp ref={this.componentRef} />
                <button type="button" onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}
export default RefContainer;