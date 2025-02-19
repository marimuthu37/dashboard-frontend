import React from 'react';
import { HashRouter } from 'react-router-dom';
import MainLayout from './appLayout/MainLayout';

const App = () => {
  return (
    <HashRouter>
      <MainLayout />
    </HashRouter>
  );
};

export default App;
