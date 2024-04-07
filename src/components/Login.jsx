import React, { useState, useContext } from 'react';
import ErrorMessage from './ErrorMessage';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';


const Login = () => {
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
      navigate('/home');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };

  return(
    <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit} className="border p-4">
         <Logo/>
         <br/>
         <div className="mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          
          <div className="text-center d-grid gap-2"> 
            <button type='submit' className='btn btn-outline-info btn-block mt-1 font-medium' >
              Login
            </button>
          </div>
       </form>
    </div>
  );
}

export default Login;