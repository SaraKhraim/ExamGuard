import React, {useEffect, useState} from 'react';
import { useContext } from "react";
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { UserContext } from './context/UserContext';


const App = () => {
  const [message, setMessage] = useState("");
  const[token] = useContext(UserContext);
  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    };
    const response = await fetch("/api", requestOptions);
    const data = await response.json();

    if(!response.ok){
      console.log("Something messed up");
    }else{
      setMessage(data.message);
    }
    
  };

  useEffect(() => {
    getWelcomeMessage();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
