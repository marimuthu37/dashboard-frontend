import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './appLayout/MainLayout';
import Login from './components/Login';

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={isLoggedIn ? <MainLayout /> : <Navigate to="/login" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
