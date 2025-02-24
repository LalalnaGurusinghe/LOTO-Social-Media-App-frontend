import { RadioGroup, Radio, FormControlLabel, TextField } from "@mui/material";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = { firstName: "", secondName: "", email: "", password: "", gender: "" };

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  secondName: Yup.string().required("Second Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  gender: Yup.string().required("Gender is required"),
});

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    navigate("/home"); // Redirect to Home Page after successful registration
  };

  return (
    <>
      <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={initialValues}>
        {({ values, handleChange, handleSubmit }) => (
          <Form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <Field as={TextField} name="firstName" placeholder="First Name" type="text" variant="outlined" fullWidth />
              <ErrorMessage name="firstName" component="div" className="text-red-500" />
            </div>

            <div className="space-y-5">
              <Field as={TextField} name="secondName" placeholder="Second Name" type="text" variant="outlined" fullWidth />
              <ErrorMessage name="secondName" component="div" className="text-red-500" />
            </div>

            <div className="space-y-5">
              <Field as={TextField} name="email" placeholder="Email" type="email" variant="outlined" fullWidth />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>

            <div className="space-y-5">
              <Field as={TextField} name="password" placeholder="Password" type="password" variant="outlined" fullWidth />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>

            {/* Gender Radio Buttons */}
            <div className="space-y-5">
              <RadioGroup name="gender" value={values.gender} onChange={handleChange} row>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
              <ErrorMessage name="gender" component="div" className="text-red-500" />
            </div>

            <button type="submit" className="btn-register">Register</button>
          </Form>
        )}
      </Formik>

      <div className="under-section">
        <p>If you already have an account?</p>
        <button className="btn-signup" onClick={() => navigate("/login")}>Login</button>
      </div>
    </>
  );
};

export default Register;
