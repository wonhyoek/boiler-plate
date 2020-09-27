import React from 'react';
import './LoginPage.css';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from '../../../_actions/user_actions';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();

    const formik = useFormik({
      initialValues: {
        email:"",
        password: ""
      },
      validationSchema: Yup.object({
        email: Yup.string()
        .email("Invalid Email Format")
        .required("Required!"),
        password: Yup.string()
        .required("Required!")
      }),
      onSubmit: values => {
        dispatch(loginUser(values))
        .then(response => {
          if(response.payload.success){
            alert('Login Success');
            history.push('/');
          }else {
            alert('Login Failed')
          }
        })
      }
    })  

      return (
        <form className = 'login-box' onSubmit = {formik.handleSubmit}>

            <h1>Login</h1>

            <div className = 'textbox'>
              <input type = 'text' placeholder = 'Email'
                name = 'email' value = {formik.values.email}
                onChange = {formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <p>{formik.errors.email}</p>
              )}
            </div>

            <div className = 'textbox'>
              <input type = 'password' placeholder = 'Password'
                name = 'password' value = {formik.values.password}
                onChange = {formik.handleChange}
              />
              {formik.errors.password && formik.touched.password && (
                <p>{formik.errors.password}</p>
              )}
            </div>

            <button className = 'btn' type = 'onSubmit'>
              Sign In
            </button>
        </form>
      );
}
