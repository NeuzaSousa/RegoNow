/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export class ConfirmView extends Component {

    
    next = e => {
        e.preventDefault();
        const {
            firstname,
            lastname,
            NIN,
            email,
            phonenumber,
            password
        } = this.props;
        const newUser= {
            first_name: firstname,
            last_name: lastname,
            NIN: NIN,
            email: email,
            phone_number: phonenumber,
            password: password
        }
        this.props.createNewUser(newUser);
        this.props.nextStep()
        
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {

        const {
            firstname,
            lastname,
            NIN,
            email,
            phonenumber,
            password
        } = this.props;
            
        return (

            <div className="form-container">
               
                <h4>Confirm</h4>
                <ul className="list-group" style={{color: "green"}} >
                  <li className="list-group-item">First Name: {firstname}</li>
                  <li className="list-group-item">Last Name: {lastname}</li>
                  <li className="list-group-item">National Identity Number: {NIN}</li>
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone Number: {phonenumber}</li>
                  <li className="list-group-item">Password: {password}</li>
                </ul> 
            
               <a>
                  <button className="button button3" onClick={this.back}>&laquo; Back</button> 
                  <button className="button button3" onClick={this.next}>&raquo; Next</button> 
                </a> 
            </div>
        );
    }
}

export default ConfirmView
