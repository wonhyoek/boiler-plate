import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { auth } from "../_actions/user_actions";
import {useHistory}from "react-router-dom";


export default function (SpecificComponent, option, adminRoute = null) {
    
    function AuthenticationCheck(props){

        const user = useSelector(state => state.user);
        const dispatch = useDispatch();
        const history = useHistory();

        useEffect(() => {
            dispatch(auth())
            .then(response => {
                if(!response.payload.isAuth){
                    if(option){
                        history.push('/login');
                    }
                } else {
                    if(adminRoute && !response.payload.isAdmin){
                        return history.push('/');
                    } else {
                        if(option === false) return history.push('/')
                    }
                }
            })
        }, [])
        
        return <SpecificComponent user = {user}/>
    }



    return AuthenticationCheck;
}