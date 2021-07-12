import React from 'react';
import { ReactDOM } from 'react-dom';
import {NavLink, Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import  Homepage  from './Routaddress1';
import  Contact  from './Routaddress2';
import About from './Routaddress3';
import NotFound from './404';
import './Routing.scss';


const Users = () =>{
    return (
        <h1>Users</h1>
    ) 
}
const UserID = ({match, history}) =>{
        console.log(match.params.ID);
   const GoHandler = () =>{
        history.push('/users');
    }
    return (
        <React.Fragment>
            <h6>User {match.params.ID}</h6>
            <button type="button" onClick={GoHandler}>GO</button>
        </React.Fragment>
        ) 
}

function Routing(){

    return (
        <Router>
        <ul className="menu">
            <li>
                <Link to="/">HomePage</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
                <ul>
                <li>
                <Link to="/users/1">User 1</Link>
            </li>
            <li>
                <Link to="/users/2">User 2</Link>
            </li>         
                </ul>
            </li>
               
        </ul>
        
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/About" component={About} />
        <Route exact path="/Users" component={Users} />
        <Route path="/Users/:ID" component={UserID} />
        <Route component={NotFound} />
        </Switch>
        
        </Router>
    )

}

export default Routing;