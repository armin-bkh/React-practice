import React from 'react';
import { ReactDOM } from 'react-dom';
import About from './Routaddress3';
import {UseProvider, UseConsumer} from './Context';


const Contact = () =>{
    return (
        <React.Fragment>
            <h1>Contact</h1>
            <About />
        </React.Fragment>
    )
}

export default Contact;