import React from 'react';
import Student from '../components/Student';
import AppLayout from './AppLayout';

const MainLayout = () => {
  return (
    <div>
      <Student /> 
      <AppLayout /> 
    </div>
  );
};

export default MainLayout;
