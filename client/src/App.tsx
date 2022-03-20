import React from 'react';
import './App.css';
import Navigator from './components/Navigator';
import MainBox from './components/MainBox';
import { AppProvider } from './AppContext'

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="Header">
          <img src= "/assets/Logo1.png" alt="logo" height="100px" />
          <Navigator/>
        </div>
        <div className= "Body">
          <MainBox/>
          <footer className="App-footer" >© 2022 by Alice</footer>
        </div>

      </div>
    </AppProvider>
  );
}

export default App;
