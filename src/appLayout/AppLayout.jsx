import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Body from '../components/Body';
import Sacademics from '../pages/student/Sacademics';
import Sattendance from '../pages/student/Sattendance';
import Sfa from '../pages/student/Sfa';
import Sachievements from '../pages/student/Sachievements';

const AppLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/student/academics" element={<Sacademics />} />
      <Route path="/student/attendance" element={<Sattendance />} />
      <Route path="/student/fa" element={<Sfa />} />
      <Route path="/student/achievements" element={<Sachievements />} />
    </Routes>
  );
};

export default AppLayout;
