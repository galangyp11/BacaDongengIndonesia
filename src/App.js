import './App.css';
import React from 'react';

import About from './components/About';
import CeritaDetail from './components/CeritaDetail';
import ListDongeng from './components/ListDongeng';
import NavbarB from './pages/NavbarB';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        
        <div className="content">
          <Switch>
            <Route exact path="/">
              <ListDongeng />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/:id">
              <NavbarB />
              <CeritaDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
