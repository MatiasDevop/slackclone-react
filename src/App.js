import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM naming convention
    <div className="App">
      <Router> 
          {/* <h1> lets build and sslacssssk a rocket</h1> */}
          {/* Header */}
          <Header />
          <div className="app_body">
            {/* Sidebar */}
              <Sidebar />
                <Switch>
                  <Route path="/room/:roomId">
                    {/* <h1> Qzi Scrmee</h1> */}
                      <Chat />
                  </Route>
                  <Route path="/">
                      <h1>WElcome</h1>
                  </Route>
                </Switch>
              
              {/** React-router -> chat screem */}   
          </div>
      </Router>
    </div>
  );
}

export default App;
