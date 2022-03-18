import React from 'react';
import './App.css';
import Navigator from './components/Navigator';
import MainBox from './components/MainBox';
import { AppProvider } from './AppProvider'

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header className="Header">
          <img src= "/assets/Logo1.png" alt="logo" height="100px" />
          <Navigator/>
        </header>
        <div className= "Body">
          <MainBox/>
        </div>
        {/* <footer className="App-footer" > Created by Alice</footer> */}
      </div>
    </AppProvider>
  );
}

export default App;
