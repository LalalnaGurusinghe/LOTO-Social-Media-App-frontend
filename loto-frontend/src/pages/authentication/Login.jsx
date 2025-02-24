import { TextField } from "@mui/material";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = { email: "", password: "" };

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    navigate("/home"); // Redirect to Home Page on successful login
  };

  return (
    <>
      <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={initialValues}>
        {({ handleSubmit }) => (
          <Form className="login" onSubmit={handleSubmit}>
            <div className="login-main">
            <div className="login-block1">
              <Field as={TextField} name="email" placeholder="Email" type="email" variant="outlined" fullWidth />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>

            <div className="login-block2">
              <Field as={TextField} name="password" placeholder="Password" type="password" variant="outlined" fullWidth />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <button type="submit" className="btn-login">Login</button>
            </div>

            
          </Form>
        )}
      </Formik>
      
      <div className="under-section-login">
        <p>If you don't have an account?</p>
        <button className="btn-signup" onClick={() => navigate("/register")}>Register</button>
      </div>
    </>
  );
};

export default Login;
