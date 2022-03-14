import React from 'react';
import './App.css';
import Navigator from './components/navigator';
import Body from './components/body';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Pearl Notes</p>
        <Navigator/>
      </header>
      <Body/>
      <footer> Created by Alice</footer>
    </div>
  );
}

export default App;
