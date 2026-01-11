import { StrictMode } from 'react';
import './App.css';
import ProtfolioContextAPIProvider from './Context-Api/PortfolioContextAPIProvider.jsx';
import React_Router from './Router/React_Router';

function App() {

  return (
    <>

      <StrictMode>
        <ProtfolioContextAPIProvider>
            <React_Router />
        </ProtfolioContextAPIProvider>
      </StrictMode> 
    </>
  )
}

export default App;