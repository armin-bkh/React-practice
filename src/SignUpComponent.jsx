import React, {Component} from 'react';
import SignUpinp from './SingUpinpComponent';

class SignUp extends Component{
    constructor(props){
    super(props);
}
    render(){
        return(
            <article className="signUp">
                <SignUpinp name="Uname" id="Username" type="text" HTMLFor="Username" lbl="Username"/>                
                <SignUpinp name="Email" id="Email" type="email" HTMLFor="Email" lbl="Email" />                
                <SignUpinp name="Password" id="Password" type="password" HTMLFor="Password" lbl="Password" />                
                <SignUpinp name="Repass" id="Repass" type="password" HTMLFor="Repass" lbl="Re type password" />                
            </article>
        )
    }
}

export default SignUp;