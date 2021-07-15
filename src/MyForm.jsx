import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SignUp from './SignUpComponent';
import './MyForm.scss';

class MyForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'signUp',
        }
    }
    submitHandler = (e) =>{
       e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.submitHandler} method="POST">
                <header className="signupHeader">
                    <h1 className="title">Create account</h1>
                </header>
                <SignUp />
                <button className="btn" type="submit">SingUp</button>
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