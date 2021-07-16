import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SignUp from './SignUpComponent';
import './MyForm.scss';

class MyForm extends Component{
    constructor(props){
        super(props);
        // this.signupComponent = React.createRef();
    }
    // submitHandler = (e) =>{
    //     e.preventDefault();
    //     this.signupComponent.current.submitHandler();
    // }
    render(){
        return(
            <form>
                <header className="signupHeader">
                    <h1 className="title">Create account</h1>
                </header>
                <SignUp ref={this.signupComponent}/>
                {/* <SignUp ref={this.signupComponent}/> */}
                {/* <button className="btn" type="submit" onClick={this.submitHandler}>SingUp</button> */}
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