import React, { useState, useContext } from 'react';
import ErrorMessage from './ErrorMessage';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

import Logo from './Logo';
import { UserOutlined as UserIcon } from '@ant-design/icons';
//import './LoginForm.css';


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [,setToken] = useContext(UserContext);
  const navigate = useNavigate();

  const submitLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify(
        `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
      ),
    };
    const response = await fetch("/api/token", requestOptions);
    const data = await response.json();

    if(!response.ok){
      setErrorMessage(data.detail);
    }else{
      setToken(data.access_token);
      navigate('/homepage/default');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };

 

  return(

    <form onSubmit={handleSubmit} className="bg-light p-4 rounded" style={{opacity: 0.75}}>
      <div className="text-center mb-4">
    <div className="bg-white rounded-circle p-3 d-inline-block" style={{zIndex: -1}}>
      <UserOutlined style={{ fontSize: '35px', color: 'black', backgroundColor: 'white' }} />
    </div>
  </div>
      
      <div className="mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="User name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setErrorMessage(""); // Clear error message
          }}
          required
        />
      </div>
        
      <div className="mb-3">
        <input 
          type="password" 
          className="form-control" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <ErrorMessage message={errorMessage}/>
      <div className="mb-3">
        <a href="/forgot-password" style={{ fontSize: '12px', color: 'black'}}>Forgot Password?</a>
      </div>
      
      <div className="text-center d-grid gap-2"> 
        <button type='submit' className='btn btn-outline-info btn-block mt-1 font-medium' >
          Login
        </button>
      </div>
  </form>
      
       
     
      
  );
}

export default LoginForm;