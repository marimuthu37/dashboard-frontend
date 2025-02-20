import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBook, FaCheckSquare, FaTrophy, FaClipboardList, FaSignOutAlt } from "react-icons/fa";

const Student = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear login status
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="bg-[#18181b] text-white p-4">
      <div className="flex items-center justify-between h-16 px-6 bg-[#18181b] text-white text-2xl">
        <nav className="flex space-x-16 items-center">
          <Link to="/" className="text-3xl font-bold">Student Dashboard</Link>
          <Link to="/student/academics" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaBook />
            <span>Academics</span>
          </Link>
          <Link to="/student/fa" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaCheckSquare />
            <span>FA</span>
          </Link>
          <Link to="/student/achievements" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaTrophy />
            <span>Achievements</span>
          </Link>
          <Link to="/student/attendance" className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors p-2 rounded-md">
            <FaClipboardList />
            <span>Attendance</span>
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleLogout} 
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Student;
