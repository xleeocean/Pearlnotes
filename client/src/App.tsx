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
        </div>
        {/* <footer className="App-footer" > Created by Alice</footer> */}
      </div>
    </AppProvider>
  );
}

export default App;
