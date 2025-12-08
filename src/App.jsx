import './App.css';
import ProtfolioContextAPIProvider from './Context-Api/PortfolioContextAPIProvider.jsx';
import React_Router from './Router/React_Router';

function App() {

  return (
    <>
      <ProtfolioContextAPIProvider>
        <React_Router />
      </ProtfolioContextAPIProvider>
    </>
  )
}

export default App;