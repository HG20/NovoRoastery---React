import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';


class Register extends Component {
    render() { 
        return (
            <Router>
            <div className="Form">
                <div className="Form__Aside"></div>
                    <div className="App__Form">
                    <div className="PageSwitcher">
                        <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink exact to="/register" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                    </div>

                    <div className="FormTitle">
                        <NavLink to ="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> 
                        or <NavLink to="/register" activeClassName="FormTitle__Link--Active" className="FormTitle__Link ">
                        Sign Up</NavLink>
                    </div>

                    <Route exact path="/register" component = {SignUpForm}>
                    
                    </Route>
                    <Route path="/sign-in" component = {SignInForm}>
                        
                    </Route>
                </div>
            </div>
            </Router>
        )
    }
}

export default Register;