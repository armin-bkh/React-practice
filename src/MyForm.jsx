import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SignUp from './SignUpComponent';
import './MyForm.scss';

class MyForm extends Component{
    constructor(props){
        super(props);
    }
    // submitHandler = (e) =>{
    //     e.preventDefault();
    // }
    render(){
        return(
            <form>
                <header className="signupHeader">
                    <h1 className="title">Create account</h1>
                </header>
                <SignUp />
                <footer className="signupFooter">
                    <Router>
                        <h5 className="subTitle"> <Link to="#">Do you have account?</Link> </h5>
                    </Router>
                </footer>
            </form>
        )
    }
}

export default MyForm;