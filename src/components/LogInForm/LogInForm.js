import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import './LogInForm.css';

const LogInForm = props => {

  const apiLogin = (values) => {
    return props.updateAuth(values)
  }

  return (
    <div className="LogInForm">
      <div className="formTitleContainer">
        <h1>Sign in</h1>
      </div>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          apiLogin(values);
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required('Required'),
          password: Yup.string().required('Required').min(8, 'Password must 8 or more characters').matches(/(?=.*[0-9])/, 'Password must contain a number'),
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Username</label>
              <input
                className={errors.username && touched.username && 'error'}
                name="username"
                type="text"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username && (
                <div className="input-feedback">{errors.username}</div>
              )}
              <label htmlFor="email">Password</label>
              <input
                className={errors.password && touched.password && 'error'}
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <button type="submit" disabled={isSubmitting}>
                Sign In
          </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LogInForm;