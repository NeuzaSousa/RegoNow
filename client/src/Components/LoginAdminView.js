import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class LoginAdminView extends Component {

    render() {
        return(
            <div className="wrapper"> 
                <h4>Are you Admin?</h4>
                <form>
                    <label>
                        <b>Username</b>
                    </label>
                    <input type="text" placeholder="Username" />

                    <label>
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter Password" />
                    <Link to="/admin">
                        <button type="submit" className="button button-3">Login</button>
                    </Link>
                </form>

            </div>
        )
    }
}

export default LoginAdminView;