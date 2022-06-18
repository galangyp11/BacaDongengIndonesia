import './App.css';
import React from 'react';
import Navbar from './Navbar';
import NavbarB from './NavbarB';
import About from './About';
import Home from './Home';
import Cerita from './Cerita';
import CeritaDetail from './CeritaDetail';
import ListDongeng from './components/ListDongeng';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Navbar />
              <ListDongeng />
            </Route>
            <Route exact path="/about">
              <Navbar />
              <About />
            </Route>
            {/* <Route exact path="/home/#section-two">
              <Cerita />
            </Route> */}
            <Route exact path="/cerita/:id">
              <CeritaDetail />
              <NavbarB />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
