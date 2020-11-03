/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

class ContactView extends Component {

    next = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {

        return (

            <div className="wrapper"> 
            
                <form onSubmit={(e) => this.handleSubmit(e)}> 
                    <h4><b>Contact Info</b></h4>
                    <label htmlFor="Email"><b>Email</b></label>
                        <input
                            type="text"
                            name="email" 
                            onChange={(e) => this.props.inputChange(e)}
                            value = {this.props.email}
                            required
                        />

                    <label htmlFor="Phone Number"><b>Phone Number</b></label>
                        <input
                            type="text"
                            name="phonenumber" 
                            onChange={(e) => this.props.inputChange(e)}
                            value = {this.props.phonenumber}
                            required
                        />
                
                    <label htmlFor="Password"><b>Password</b></label>
                        <input
                        type="password"
                        name="password" 
                        onChange={(e) => this.props.inputChange(e)} 
                        value = {this.props.password}
                        required
                    /> 
                   
                    <label><input type="checkbox"/> Remember me</label> 

                </form>
                
                <a>
                <button className="button button3" onClick={this.back}>&laquo; Back</button> 
                <button type="submit" className="button button3" onClick={this.next}>&raquo; Next</button> 
                </a> 
           
            </div>
        )
    }
}

export default ContactView
