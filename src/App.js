import React, { lazy, Suspense } from 'react';

import './App.scss';
import { AppProvider } from './contexts/AppContext';
import { YoutubeLogo } from './assets/icons/header/YoutubeLogo';

const Header = lazy(() => import('./components/header/Header'));
const MainHomePage = lazy(() => import('./components/mainHomePage/MainHomePage'));

function App() {

  return (
     <Suspense fallback={<div className='loading'><YoutubeLogo /> <h2>Clone loading...</h2></div>}>
       <AppProvider>
        <div className="App">
          <Header />
          <MainHomePage />
        </div>
      </AppProvider>
     </Suspense>
    )
}

export default App;
