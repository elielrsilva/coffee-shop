import React, {useState, useEffect} from 'react';
import styles from './Login.module.css';
import UserIcon from '../../img/user.png'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // useEffect(() => {
  //   console.log(username);
  // });

  return (
    <div className={styles.container}>
      <img src={UserIcon} className={styles.avatar} alt="Meu pai de óculos" srcset=""/>
      <h1>Login Here</h1>
      <form className={styles.login}>
        <p>Username</p>
        <input 
          type="text" 
          name="fname"
          id="fname" 
          placeholder="Enter Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <p>Password</p>
        <input 
          type="password" 
          name="fpassword" 
          id="fpassword" 
          placeholder="Enter Password"
          value={password}
          onChange={ (event) => setPassword(event.target.value)}
        />
        <input type="submit" value="Login"/>
        <a href="#">Lost your password?</a><br/>
        <a href="#">Don't you have your account?</a> 
      </form>
    </div>
  )
};

export default Login;