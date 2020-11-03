import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route, Switch, Link } from 'react-router-dom';


export class Savings extends Component {
    render() {
        return (
            <div>
                <ul className="menu">
                    <li className="item"><NavLink to="/loans" activeClassName="selected">Loans</NavLink></li>
                    <li className="item"><NavLink to="/savings" activeClassName="selected">Savings</NavLink></li>
                </ul>
                <div className="wrapper-loans container p-3 my-3 bg-none text-black">
                    <div className="row">
                    {/*<img src="https://rego.biz/wp-content/uploads/2020/07/Picture1.png" alt='' />*/}
                        <h4>You have <strong>5000</strong> in savings.</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <button>Make a Deposit</button>
                        </div>
                        <div className="col-lg-4">
                            <button>Withraw</button>
                        </div>
                        <div className="col-lg-4">
                            <button>Transfer to Current Balance</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Savings
