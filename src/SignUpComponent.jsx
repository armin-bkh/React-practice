import React, {Component} from 'react';
import SignUpinp from './SingUpinpComponent';

class SignUp extends Component{
    constructor(props){
    super(props);
    this.state = {
        nameinpRef : React.createRef(),
        emailinpRef: React.createRef(),
        passwordinpRef: React.createRef(),
        repasswordinpRef: React.createRef(),
        mess: React.createRef(),
        error: 1
        }
    }
    submitHandler = (e) =>{
        // e.preventDefault();
        e.preventDefault();
        const nameinpval = this.state.nameinpRef.current;
        const emailinpval = this.state.emailinpRef.current;
        const passinpval = this.state.passwordinpRef.current;
        const repassinpval = this.state.repasswordinpRef.current;
        const message = this.state.mess.current;
        let inps = [nameinpval, emailinpval, passinpval, repassinpval]
        if(!inps[0].getValue() || !inps[1].getValue() || !inps[2].getValue() || !inps[3].getValue()){
            message.innerHTML = "You must fill all inputs";
            for(let i = 0; i < inps.length; i++){
                inps[i].changeBorderHandler("2px dashed #797878");
            }
        } else if(passinpval.getValue() !== repassinpval.getValue()){
            message.innerHTML = "re type password must be same with password";
            for(let i = 0; i < inps.length; i++){
                if(inps[i] !== repassinpval) inps[i].changeBorderHandler("none");
                else inps[i].changeBorderHandler("2px dashed #797878")
            }
        } else {
            message.innerHTML = "";
            for(let i = 0; i < inps.length; i++){
                inps[i].changeBorderHandler("none");
            }
        }
    }
    render(){
        const state = this.state;
        return(
            <article className="signUp">
                <SignUpinp ref={state.nameinpRef} name="Uname" id="Username" type="text" HTMLFor="Username" lbl="Username"/>                
                <SignUpinp ref={state.emailinpRef} name="Email" id="Email" type="email" HTMLFor="Email" lbl="Email" />                
                <SignUpinp ref={state.passwordinpRef} name="Password" id="Password" type="password" HTMLFor="Password" lbl="Password" />                
                <SignUpinp ref={state.repasswordinpRef} name="Repass" id="Repass" type="password" HTMLFor="Repass" lbl="Re type password" /> 
                <span className="message" ref={state.mess}></span>
                <button className="btn" type="submit" onClick={this.submitHandler}>SingUp</button>
            </article>
        )
    }
}

export default SignUp;