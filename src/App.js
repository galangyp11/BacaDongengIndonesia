import './App.css';
import React from 'react';

import About from './components/About';
import CeritaDetail from './components/CeritaDetail';
import ListDongeng from './components/ListDongeng';
import AlertWindow from './components/AlertWindow';
import NavbarB from './pages/NavbarB';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
    const [isScreen, setIsScreen] = useState(
    window.matchMedia("(min-width: 1366px) ").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 1366px) ")
    .addEventListener('change', e => setIsScreen( e.matches ));
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        
        <div className="content">
          <Switch>
            <Route exact path="/" >
              {!isScreen ? <AlertWindow/> : <ListDongeng/>}

            </Route>

            <Route exact path="/about">
              {!isScreen ? <AlertWindow/> : <About/>}
           
            </Route>

            <Route exact path="/:id">
              {!isScreen ? <AlertWindow/> : <CeritaDetail />}

            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
