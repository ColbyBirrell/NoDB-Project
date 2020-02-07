import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Addchore from './components/Addchore'
import Chorelist from './components/Chorelist'

class App extends Component {
  constructor() {
    super()

    this.state = {
      chores: []
    }


  }


  render() {
    return (
      <div className="App">

        <Header />
        <Addchore />
        <Chorelist />


      </div>
    );
  }
}

export default App;
