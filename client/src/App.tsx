import React from 'react';
import './App.css';
import Navigator from './components/navigator';
import MainBox from './components/mainbox';

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <img src= "/assets/Logo1.png" alt="logo" height="100px" />
        <Navigator/>
      </header>
      <body className= "Body">
        <MainBox/>
      </body>

      {/* <footer className="App-footer" > Created by Alice</footer> */}
    </div>
  );
}

export default App;
