import { TextField } from "@mui/material";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const initialValues = { email: "", password: "" };

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={initialValues}>
      {({ handleSubmit }) => (
        <Form className="space-y-5">
          <div className="space-y-5">
            <Field as={TextField} name="email" placeholder="Email" type="email" variant="outlined" fullWidth />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>

          <div className="space-y-5">
            <Field as={TextField} name="password" placeholder="Password" type="password" variant="outlined" fullWidth />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>

          <button type="submit" className="btn-form">Login</button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
