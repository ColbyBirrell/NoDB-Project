import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Addchore from './components/Addchore'
import Chorelist from './components/Chorelist'
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      chores: []
    }


  }


  componentDidMount() {
    axios.get('/api/chores').then((res) => {
      this.setState({
        chores: res.data
      })
    })
  }

  newChore() {

  }

  editChore() {

  }

  deleteChore() {

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
