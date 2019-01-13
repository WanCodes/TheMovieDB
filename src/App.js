import React, { Component } from 'react';
import MoviesPage from "./containers/MoviesPage/MoviesPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <MoviesPage />
        </div>
      </div>
    );
  }
}

export default App;