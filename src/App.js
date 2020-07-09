// Library imports
import React from 'react';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Component imports
import {Events} from './events';
import {Appeals} from './Appeals';
import {Leaderboards} from './Leaderboards';
import {Profile} from './Profile';
import {Home} from './Home';
import {Donate} from './Donate';
import {Art} from './Art';
import {Login} from './Login';

// Stylesheets
import './App.css';
import './Events.css';
import './Appeals.css';
import './Leaderboards.css';
import './Profile.css';

// Header class
function Page() {
  return (
      <div>
        <Router>
        <header>
          <div className="Header">        
              <p><span><Link to="/">Home</Link></span></p>
              <p><span><Link to="/Leaderboards">Leaderboards</Link></span></p>
              <p><span><Link to="/Events">Events</Link></span></p>
              <p><span><Link to="/Donate">Donate</Link></span></p>
              <p><span><Link to="/Art">Sakura Art</Link></span></p>
              <p><span><Link to="/Profile">Profile</Link></span></p>
              <p><span><Link to="/Appeal">Ban Appeal</Link></span></p>
              <p className="Instagram"><span><FontAwesomeIcon icon={faInstagram}/></span></p>
              <p><span className="Login"><Link to="/Login">Login</Link></span></p>
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Leaderboards" component={Leaderboards} />
          <Route path="/Events" component={Events} />
          <Route path="/Donate" component={Donate} />
          <Route path="/Art" component={Art} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Appeal" component={Appeals} />
          <Route path="/Login" component={Login} />
        </Switch>
        </Router>
      </div>
  )
}

//
function App() {
  return (
    <div className="App">
      <Page/>
    </div>
  );
}

export default App;
