import React from 'react';
import './Login.css';
import UserIcon from '../img/user.png'

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render(){
    return (
      <div className="container">
        <img src={UserIcon} className="avatar" srcset=""/>
        <h1>Login Here</h1>
        <form className="login">
          <p>Username</p>
          <input 
            type="text" 
            name="fname"
            id="fname" 
            placeholder="Enter Username"
            value={this.state.username}
            onChange={(event) => this.setState({username: event.target.value})}
          />
          <p>Password</p>
          <input 
            type="password" 
            name="fpassword" 
            id="fpassword" 
            placeholder="Enter Password"
            value={this.state.password}
            onChange={ (event) => this.setState({password: event.target.value})}
          />
          <input type="submit" value="Login"/>
          <a>Lost your password?</a><br/>
          <a>Don't you have your account?</a> 
        </form>
      </div>
    )
  }
};