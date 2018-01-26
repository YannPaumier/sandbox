import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

// The Header creates links that can be used to navigate
// between routes.
class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Starter App</h1>
          <p>logo : {logo}</p>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/synchros'>Synchros</Link></li>
            <li><Link to='/schedule'>Schedule</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
