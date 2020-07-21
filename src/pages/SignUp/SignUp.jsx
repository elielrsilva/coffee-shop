import React, { Component, useState, useEffect } from 'react';
import UserIcon from '../../img/user.png';
import styles from './SignUp.module.css';

const SignUp = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.container}>
      <form className={styles.login}>
      <img src={UserIcon} className={styles.avatar} srcset=""/>
        <h1>Sign Up</h1>
        <p>Email</p>
        <input 
          type="email" 
          name="femail"
          id="femail" 
          placeholder="Enter Email"
          value={email}
          onChange={(event) => setEmail({email: event.target.value})}
        />
        <p>Password</p>
        <input 
          type="password" 
          name="fpassword" 
          id="fpassword" 
          placeholder="Enter Password"
          value={password}
          onChange={ (event) => setPassword({password: event.target.value})}
        />
        <input type="submit" value="Sign Up"/>
        <a>Already have an account?</a> 
      </form>
    </div>
  )
};

export default SignUp;
