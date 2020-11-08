import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./myComponents/Hello";
import Welcome from "./myComponents/Welcome";

function App() {
  return (
    <div className="App">
      <Hello name="Deb" age="26"/>
      <Hello name="Das"/>
        <Hello name="Avey"/>
      <Welcome/>
    </div>
  );
}

export default App;
