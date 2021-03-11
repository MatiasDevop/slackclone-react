import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM naming convention
    <div className="App">
      <h1> lets build and sslacssssk a rocket</h1>
      
      {/* Header */}
      <Header />
      <div className="app_body">
          <Sidebar />
          {/* Sidebar */}
          {/** React-router -> chat screem */}   
      </div>
      
    </div>
  );
}

export default App;
