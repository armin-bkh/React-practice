import React, {Component} from 'react';
import TestC from './Test1';
import Error from './ErrorBountry';
class ErrorApp extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Error>
                    <TestC content="Milad" />
                </Error>
                <Error>
                    <TestC content="Armin" />
                </Error>
            </div>
        )
    }
}
export default ErrorApp;