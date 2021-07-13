import React from "react";
import { ReactDOM } from "react-dom";
import {
  NavLink,
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import Homepage from "./Routaddress1";
import Contact from "./Routaddress2";
import About from "./Routaddress3";
import NotFound from "./404";
import "./Routing.scss";

const Users = () => {
  return (
    <React.Fragment>
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="/Users/Amir">User-1</Link>
        </li>
        <li>
          <Link to="/Users/Reza">User-2</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};
const UserID = ({ match, history }) => {
  const ID = match.params.ID;
  if (ID === "Amir" || ID === "Reza") {
    return (
        <React.Fragment>
            <h1>Welcome {ID}</h1>
            <button onClick={()=> history.push('/Users')}>Go</button>
        </React.Fragment>
        );
  } else {
    return <NotFound />;
  }
};
const Routing = () => {
  return (
    <Router>
      <ul className="menu">
        <li>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Users">
            Users
          </NavLink>
          <ul>
            <li>
              <NavLink activeClassName="active" to="/Users/Amir">
                User-1
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/Users/Reza">
                User-2
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact exact path="/Users" component={Users} />
        <Route exact path="/Users/:ID" component={UserID} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routing;
