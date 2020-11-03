/* eslint-disable default-case */
import React, { Component } from 'react'
import AccountSetUp from "./AccountSetUp";
import ContactView from "./ContactView";
import ConfirmView from "./ConfirmView";
import SuccessView from "./SuccessView";

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            step: 1,
            firstname: '',
            lastname: '',
            NIN: '',
            email: '',
            phonenumber: '',
            password: '',
            newUser: {}
        };
    }
    

    //this method is called when the 'Next' button is clicked
    nextStep = () => {
        const {step} = this.state;
        this.setState({step: step+1});//increment to lead to the next step
    }

    //this method will be called when the 'Back' button is clicked
    prevStep = () => {
        const {step} = this.state;
        this.setState({step: step-1}); // subtract to go back to the previous step
    };

    inputChange = (event) => {
        this.setState({[event.target.name]: event.target.value    
        });
    };


    createNewUser = (newUser) => {
        this.setState({
            newUser: newUser
        })
        this.props.addUser(newUser)
    }

    render() {
        const {step} = this.state;
        const{firstname, lastname, NIN, email, phonenumber, password } = this.state;
        
       
        //switch between the steps
        switch(step){
            case 1:
                return(
                    <AccountSetUp
                        nextStep = {this.nextStep} 
                        inputChange={(e) => this.inputChange(e)}
                        createUser={(f, l, n) => this.createUser(f, l, n)}
                        firstname={firstname}
                        lastname={lastname}
                        NIN={NIN}


                    />
                );
            case 2:
                return (
                    <ContactView
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        inputChange = {(e) => this.inputChange(e)}
                        email={email}
                        phonenumber={phonenumber}
                        password={password}
                        
                    />
                );
            
            case 3:
                return (
                    <ConfirmView
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        firstname={firstname}
                        lastname={lastname}
                        NIN={NIN}
                        email={email}
                        phonenumber={phonenumber}
                        password={password}
                        createNewUser={this.createNewUser}
                        
                    />
                );
            case 4:
                return(
                    <SuccessView/>
                );
                           
        }
       
        
    }
}

export default SignUpForm;
