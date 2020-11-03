import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class LoginForm extends Component {
    render() {
        return (
            <div>
               
        
                <div className="wrapper"> 
                
               <form> 
               <h4><b>Login</b></h4>
                
                   <label htmlFor="NIN"><b>National Identity Number</b></label>
                      <input type="text" placeholder="NIN" name="National Identity Number" required/> 

                    <label htmlFor="password"><b>Password</b></label>
                      <input type="password" placeholder="Enter Password" name="psw" required/>

                    <Link to="/user">
                        <button className="button button4 margin">Login to Account</button>
                    </Link>
                      

                      <p>Forgot Password?</p>
                      <p>Don't have an Account? <b>Create Account</b></p>
                      
                </form> 
            </div>
            </div>
        );
    }
}

export default LoginForm
