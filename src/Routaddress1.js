import React, {Component} from 'react';
import { ReactDOM } from 'react-dom';
import Contact from './Routaddress2';


class Homepage extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>HomePage</h1>
                <Contact />
            </React.Fragment>
        )
    }
}

export default Homepage;