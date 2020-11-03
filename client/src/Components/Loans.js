import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route, Switch, Link } from 'react-router-dom';


export class Loans extends Component {
    render() {
        return (
            <div>
                {/*<div class="container p-3 my-3 bg-none text-black">
                  <img src="https://rego.biz/wp-content/uploads/2020/07/bvbbvbv.png  ">
                  </img>
                </div>*/}
                <ul className="menu">
                    <li className="item"><NavLink to="/loans" activeClassName="selected">Loans</NavLink></li>
                    <li className="item"><NavLink to="/savings" activeClassName="selected">Savings</NavLink></li>
                </ul>
                
                <div className="wrapper-loans container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>Individual Loans</h4>
                            <ul>
                                <li>20-03-2019 - 5000</li>
                                <li>30-07-2020 - 3000</li>
                            </ul>
                           
                        </div>
                        <div className="col-lg-6">
                            <h4>Group Loans</h4>
                            <h6>You have no group loans at the moment</h6>
                        </div>
                    </div>

                    <div className="row bg-orange">
                        <div className="col-lg-6">
                            <button>Request a Loan</button>
       
                        </div>
                        <div className="col-lg-6">
        
                            <button>Pay a Loan</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Loans
