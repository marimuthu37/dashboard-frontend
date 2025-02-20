import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true); 
    setTimeout(() => navigate('/'), 100); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <input 
          type="email" 
          placeholder="Enter email"
          className="w-full px-4 py-2 mt-1 border rounded-lg"
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Enter password"
          className="w-full px-4 py-2 mt-2 border rounded-lg"
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        <button 
          onClick={handleLogin} 
          className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
