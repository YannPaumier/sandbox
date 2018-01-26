import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';

// this component will be rendered by <BrowserRouter>
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
export default App;
