import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './App.css';

// this component will be rendered by <BrowserRouter>
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    )
  }
}
export default App;
