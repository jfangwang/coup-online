import React from 'react';
import logo from './logo.svg';
import SocketTest from './components/socketTest'
import CreateGame from './components/CreateGame';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/create">
              <CreateGame></CreateGame>
            </Route>
            <Route path="/join">
            </Route>
            <Route path="/">
              <SocketTest/>
            </Route>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
