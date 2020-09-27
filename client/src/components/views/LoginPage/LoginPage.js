import React from 'react';
import './LoginPage.css';

export default () => {
    
      return (
        <div className = 'login-box'>

            <h1>Login</h1>

            <div className = 'textbox'>
              <input type = 'text' placeholder = 'Email'/>
            </div>

            <div className = 'textbox'>
              <input type = 'password' placeholder = 'Password'/>
            </div>

            <input className = 'btn' type = 'button' value = 'Sign In'/>

        </div>
      );
}
