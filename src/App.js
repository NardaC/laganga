import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import ItemSpecific from './components/ItemSpecific/ItemSpecific';

function App() {
  return (
    <Router className="App">
      <Menu/>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/item-especific/:productId">
          <ItemSpecific/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
