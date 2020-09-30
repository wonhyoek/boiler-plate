import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './NavBar.css';
import {signOut} from "../../../_actions/user_actions"
import { useHistory } from "react-router-dom";

export default () => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const signOutHandler = () => {
        dispatch(signOut())
        .then(response => {
            if(response.payload.success){
                alert('Success Log Out');
                window.location.reload();
                history.push('/');
            } else {
                alert('Failed Log Out');
            }
        })
    }
    
    return (
        <nav className = 'navbar-container'>
            <div className = 'navbar'>
                <div className = 'navbar-logo'>
                    <a href = '/'>Logo</a>
                </div>
                {user.userData && !user.userData.isAuth ? (
                    <div className = 'authBtn'>
                        <div className = 'signBtn'>
                            <a href = '/login'>Sign In</a>
                        </div>
                        <div className = 'signBtn'>
                            <a href = '/register'>Sign Up</a>
                        </div>
                    </div>
                ) : (
                    <div className = 'signOutBtn' onClick = {signOutHandler}>
                        Sign Out
                    </div>
                )}
            </div>
        </nav>
    )
}
