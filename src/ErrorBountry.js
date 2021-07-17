import React, { Component } from 'react';

class Error extends Component{
    constructor(){
        super();
        this.state = {
            error: false,
            child: ''
        }
    }
    static getDerivedStateFromError(err){
        return{error: true}
    }
    static getDerivedStateFromProps(props, state){
        return{child: props.children}
    }
    componentDidCatch(err, info){
        console.log(err);
        console.log(info);
    }
    render(){
        if(this.state.error){
            return (<h1>We have a same Error</h1>)
        }
        return (
            this.state.child
        )
    }
}
export default Error;