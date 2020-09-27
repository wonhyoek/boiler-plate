import React from 'react';
import './RegisterPage.css';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default () => {

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .min(2, "Minimum 2 characters")
            .max(15, "Maximum 15 characters")
            .required("Required!"),
            email: Yup.string()
            .email("Invalid email format")
            .required("Required!"),
            password: Yup.string()
            .min(8, "Minimum 8 characters")
            .required("Required!"),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Password's not match")
            .required("Required!")
        }),
        onSubmit: values => {
          axios.post('/api/auth/register', values)
          .then(response => {
            if(response.data.success){
              alert('Sign In Success');
              history.push("/login");
            }
          })
        }
        
    })

    return (
        <form className = 'register-box' onSubmit = {formik.handleSubmit}>

            <h1>Register</h1>

            <div className = 'textbox'>
              <input type = 'text' placeholder = 'Name'
                name = "name" value = {formik.values.name} onChange = {formik.handleChange}
              />
              {formik.errors.name && formik.touched.name && (
                <p>{formik.errors.name}</p>
              )}
            </div>
            
            <div className = 'textbox'>
              <input type = 'email' placeholder = 'Email'
                name = "email" value = {formik.values.email} onChange = {formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <p>{formik.errors.email}</p>
              )}
            </div>

            <div className = 'textbox'>
              <input type = 'password' placeholder = 'Password'
                name = "password" value = {formik.values.password} onChange = {formik.handleChange}
              />
              {formik.errors.password && formik.touched.password && (
                <p>{formik.errors.password}</p>
              )}
            </div>

            <div className = 'textbox'>
              <input type = 'password' placeholder = 'Confirm Password' onChange = {formik.handleChange}
                name = "confirmPassword" value = {formik.values.confirmPassword}
              />
              {formik.errors.confirm_password &&
                formik.touched.confirm_password && (
                <p>{formik.errors.confirm_password}</p>
              )}
            </div>

            <button type = 'submit' className = 'btn'>
                Sign In
            </button>

        </form>
    )
}
