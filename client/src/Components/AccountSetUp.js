import React, { Component } from 'react'

class AccountSetUp extends Component {

  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {

    return (
      <div className="wrapper"> 
            
        <form> 
          <h4><b>Sign Up</b></h4>
            <label htmlFor="First Name"><b>First Name</b></label>
              <input
                type="text"
                name="firstname" 
                onChange={(e) => this.props.inputChange(e)}
                value = {this.props.firstname}
                required
                />

            <label htmlFor="Last Name"><b>Last Name</b></label>
              <input
                type="text"
                name="lastname" 
                onChange={(e) => this.props.inputChange(e)}
                value = {this.props.lastname}
                required/>
                
            <label htmlFor="National Identity Number"><b>National Identity Number</b></label>
              <input
                type="text"
                name="NIN" 
                onChange={(e) => this.props.inputChange(e)} 
                value = {this.props.NIN}
                required
              /> 
            
            <button type='submit' className="button button4" onClick={this.next}>Next</button>
                   
        </form>
      </div>  
                
        )
    }
}

export default AccountSetUp
