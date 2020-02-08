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

  newChore = (userInput) => {
    // console.log(userInput)
    axios.post(`/api/chores`, { chore: userInput }).then((res) => {
      this.setState({
        chores: res.data
      })
    })
  }

  editChore = (id, userInput) => {
    axios.put(`/api/chores/${id}`, { chore: userInput }).then((res) => {
      this.setState({
        chores: res.data
      })
    })
  }

  deleteChore = (id) => {
    axios.delete(`/api/chores/${id}`).then(res => {
      // console.log(res.data)
      this.setState({
        chores: res.data
      })
    })
  }




  render() {
    return (
      <div className="App">

        <Header />
        <Addchore newChore={this.newChore} />
        <Chorelist
          chores={this.state.chores}
          deleteChore={this.deleteChore}
          editChore={this.editChore} />


      </div>
    );
  }
}

export default App;
