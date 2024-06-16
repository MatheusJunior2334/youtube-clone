import React from 'react';

import './App.scss';
import { MainHomePage } from './components/mainHomePage/MainHomePage';
import { Header } from './components/header/Header';
import { AppProvider } from './contexts/AppContext';

function App() {

  return (
      <AppProvider>
        <div className="App">
          <Header />
          <MainHomePage />
        </div>
      </AppProvider>
    )
}

export default App;
