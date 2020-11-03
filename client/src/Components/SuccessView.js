import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class SuccessView extends Component {
    render() {
        return (
            <div className="form-container">
               <h4 className="text-white">You have successfully created your RegoNow Account!</h4> 
               
               <Link to="/login">
                    <button className="button">Login</button>
                </Link>
            </div>
        );
    }
}

export default SuccessView
