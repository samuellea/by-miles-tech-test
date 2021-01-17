import React from 'react';
import './SignIn.css';
import LogInForm from '../LogInForm/LogInForm';

const SignIn = props => {
  const { updateAuth } = props;
  return (
    <div className="SignIn" >
      <LogInForm updateAuth={updateAuth} />
    </div>
  );
}

export default SignIn;