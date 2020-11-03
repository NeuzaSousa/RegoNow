import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Switch, Link } from 'react-router-dom';


export class UserProfile extends Component {
    render() {
        return (
            <div>
                <ul className="menu">
                    <li className="item"><NavLink to="/loans" activeClassName="selected">Loans</NavLink></li>
                    <li className="item"><NavLink to="/savings" activeClassName="selected">Savings</NavLink></li>
                </ul>
                <div className="wrapper-loans text-orange">
                    <div className="row">
                        <h4>Hello, Joana!</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>You have 50,000 in Loans</h3>
                        </div>
                        <div className="col-lg-6">
        
                            <h3>You have 50,000 in Savings</h3>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default UserProfile
