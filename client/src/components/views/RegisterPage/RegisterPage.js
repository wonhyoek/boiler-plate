import React from 'react';
import './RegisterPage.css';

export default () => {
    return (
        <div className = 'register-box'>

            <h1>Register</h1>

            <div className = 'textbox'>
              <input type = 'text' placeholder = 'Name'/>
            </div>
            
            <div className = 'textbox'>
              <input type = 'text' placeholder = 'Email'/>
            </div>

            <div className = 'textbox'>
              <input type = 'password' placeholder = 'Password'/>
            </div>

            <div className = 'textbox'>
              <input type = 'password' placeholder = 'Confirm Password'/>
            </div>

            <input className = 'btn' type = 'button' value = 'Sign Up'/>

        </div>
    )
}
