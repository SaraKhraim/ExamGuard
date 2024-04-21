import React from 'react';
import LoginForm from '../components/LoginForm';
import './LoginPage.css'



const LoginPage = () => {
 
  return(
    <React.Fragment>
      <div className='background-container'>
      <div className='background-image'></div>
      <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
        <LoginForm />
      </div>
    </div>
        
    </React.Fragment>
    
  );
}

export default LoginPage;