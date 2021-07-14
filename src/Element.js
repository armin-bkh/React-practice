import React, {Component} from 'react';


class LogOn extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <article>
            <label className="lbl">Username:</label><input className="inp" type="text" />
            <br />
            <label className="lbl">Email:</label><input className="inp" type="email" />
            <br />
            <label className="lbl">password:</label><input className="inp" type="password" />
            <br />
            <label className="lbl">repassword:</label><input className="inp" type="password" />
            <button className="btn" type="sumbit" onClick={this.props.sub}>LogOn</button>
            </article>
        )
    }
}
export default LogOn;