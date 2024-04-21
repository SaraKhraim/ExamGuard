import React, {useEffect, useState} from 'react';
import { useContext } from "react";
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { UserContext } from './context/UserContext';
import ConfirmationPage from './pages/ConfirmationPage';
import ClassroomPage from './pages/ClassroomPage';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage/>}/>
          <Route path='/homepage/default' element={<HomePage/>}/>
          <Route path='/classroom/:classroomId' element={<ClassroomPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  
  );
}

export default App;
