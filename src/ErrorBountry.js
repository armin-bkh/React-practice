import React, { Component } from 'react';

class Error extends Component{
    constructor(){
        super();
        this.state = {
            Error: false,
            child: ''
        }
    }
    static getDerivedStateFromError(err){
        return{Error: true}
    }
    static getDerivedStateFromProps(props, state){
        return{child: props.children}
    }
    componentDidCatch(err, info){
        console.log(err);
        console.log(info);
    }
    render(){
        if(this.state.Error){
            return (<h1>We have a same Error</h1>)
        }
        return (
            this.props.children
        )
    }
}
export default Error;