import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import About from './Routaddress3';
import {UseConsumer, UseProvider} from './Context';
class Contact extends Component{
    render(){
        return (
            <React.Fragment>
                <UseConsumer>
                    {
                        (val) =>{
                            return (<h1 style={{color: val.colors.colorLight}}>Contact</h1>)
                        }
                    }
                </UseConsumer>
                <h1>Contact</h1>
                <About />
            </React.Fragment>
        )
}
}

export default Contact;