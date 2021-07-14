import React, {Component} from 'react';

class LogIn extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <article>
                <label className="lbl">username:</label>
                <input className="inp" type="text" />
                <br />
                <label className="lbl">password:</label>
                <input className="inp" type="password" />
                <button className="btn" type="submit" onClick={this.props.sub}>
                    logIn
                </button>
            </article>
          )
    }
}
export default LogIn;