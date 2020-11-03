import React, { Component } from 'react'

export class AdminView extends Component {

    

    render() {
   
        let usersJsx = this.props.users.map(u => (
            <tr key={u.id}>
                <td key={u.last_name}>{u.last_name}</td>        
                <td key={u.first_name}>{u.first_name}</td>        
                <td key={u.NIN}>{u.NIN}</td>        
                <td key={u.email}>{u.email}</td>
                <td key={u.phone_number}>{u.phone_number}</td>
                <td key={u.loans}>{u.loans}</td>
                <td key={u.savings}>{u.savings}</td>

            </tr>
        ));
        return (
            <div className="wrapper-loans container-fluid">
                <h4>Hello, Susan!</h4>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>NIN</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Loans</th>
                                <th>Savings</th>
                            </tr>
                        </thead>
                        <tbody>
                        {usersJsx}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AdminView;
