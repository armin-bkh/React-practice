import React from 'react';
import { ReactDOM } from 'react-dom';
import Contact from './Routaddress2';
import {UseProvider, UseConsumer} from './Context';


const Homepage = () =>{
    return(
        <React.Fragment>
            <h1>HomePage</h1>
            <Contact />
        </React.Fragment>
    )
}

export default Homepage;