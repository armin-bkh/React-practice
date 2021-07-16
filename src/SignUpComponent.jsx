import React, {Component} from 'react';
import SignUpinp from './SingUpinpComponent';

class SignUp extends Component{
    constructor(props){
    super(props);
    this.state = {
        inputnameRef: React.createRef(),
        inputemailRef: React.createRef(),
        inputpassword: React.createRef(),
        inputrepassword: React.createRef(),
        err: React.createRef()
        }
    }
    submitHandler = (e) =>{
        // e.preventDefault();
        e.preventDefault();
        const errmessage = this.state.err;
        const nameval = this.state.inputnameRef.current.getValue();
        const emailval = this.state.inputemailRef.current.getValue();
        const passwordval = this.state.inputpassword.current.getValue();
        const repasswordval = this.state.inputrepassword.current.getValue();
        if(!nameval || !emailval || !passwordval || !repasswordval){
            errmessage.current.innerHTML = "You must fill all inputs";
        } else if(passwordval !== repasswordval){
            errmessage.current.innerHTML = "Password inputs must be exactly the same";
        } else errmessage.current.innerHTML = "";
    }
    render(){
        const state = this.state;
        return(
            <article className="signUp">
                <SignUpinp ref={state.inputnameRef} name="Uname" id="Username" type="text" HTMLFor="Username" lbl="Username"/>                
                <SignUpinp ref={state.inputemailRef} name="Email" id="Email" type="email" HTMLFor="Email" lbl="Email" />                
                <SignUpinp ref={state.inputpassword} name="Password" id="Password" type="password" HTMLFor="Password" lbl="Password" />                
                <SignUpinp ref={state.inputrepassword} name="Repass" id="Repass" type="password" HTMLFor="Repass" lbl="Re type password" /> 
                <span className="message" ref={state.err}></span>
                <button className="btn" type="submit" onClick={this.submitHandler}>SingUp</button>
            </article>
        )
    }
}

export default SignUp;