import React from 'react';
import './App.css';
import SignUpForm from "./Components/SignUpForm";
import LoginForm from "./Components/LoginForm";
import Loans from "./Components/Loans";
import Savings from "./Components/Savings";
import AdminView from "./Components/AdminView";
import { BrowserRouter, NavLink, Route, Switch, Link } from 'react-router-dom';
import UserProfile from './Components/UserProfile';
import LoginAdminView from './Components/LoginAdminView';

const USERS_URL = "http://localhost:5000/users";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginForm: false,
      users: [],
      newUser: {}
    }
  }

  //this handler will be called when I click the login button
  changeUser(isLogin) {
    this.setState({ LoginForm: isLogin });
  }

  componentDidMount() {
    fetch(USERS_URL)
      .then(res => res.json())
      .then(json => {
        // upon success, update users
        this.setState({ users: json });
      })
      .catch(error => {
        // upon failure, show error message
        console.log("ERROR in componentDidMount():", error);
      });
  }

  addUser = (newUser) => {
    this.setState({
      newUser: newUser
    })
    this.updateUserList(newUser)
  }

  updateUserList = (newUser) => {
    fetch(USERS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    .then(res => res.json())
    .then(json => {
      this.setState({ users: json });
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (

      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Link to="/">
              <img src="https://rego.biz/wp-content/uploads/2020/07/Rego_vv-2048x2048.png" alt="logo"></img>
            </Link>
          </div>

          <nav>

            <Link to='/login'>
              <button
                className={this.state.LoginForm //if this is the loginView
                  ? 'active'
                  : ''}
                onClick={() => this.changeUser(true)}>
                Login
              </button>
            </Link>

            <Link to="/">
              <button
                className={!this.state.LoginForm //if else this is not the loginView
                  ? 'active'
                  : ''}
                onClick={() => this.changeUser(false)}>
                Sign Up
              </button>
            </Link>

            <Link to="/loginadmin">
              <button className="button btn-light">Admin</button>
            </Link>

            

          </nav>

          <Switch>
            <Route path="/" exact>
              <SignUpForm users={this.state.users} newUser={this.state.newUser} addUser={this.addUser} />
            </Route>
            <Route path="/loans">
              <Loans />
            </Route>
            <Route path="/savings">
              <Savings />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/loginadmin">
              <LoginAdminView/>
            </Route>
            <Route path="/admin">
              <AdminView users={this.state.users} newUser={this.state.newUser} />
            </Route>
            <Route path="/user">
              <UserProfile />
            </Route>
          </Switch>

        </BrowserRouter>
        {/*          
          {
           this.state.LoginForm
            ? <LoginForm/>
            : <SignUpForm/>
          }  */}


        <footer>RegoNow 2020</footer>
      </div>

    );
  }

}



export default App;
