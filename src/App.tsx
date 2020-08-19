import React from 'react';
import GlobalStyle from './styles/global';
import Advertising from './pages/Advertising';

import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Advertising />
      <GlobalStyle />
    </>
  );
};

export default App;
