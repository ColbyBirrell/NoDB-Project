import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Addchore from './components/Addchore'
import Chorelist from './components/Chorelist'
import Footer from './components/Footer'
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
    }).catch((error) => { console.error(error) })
  }

  newChore = (userInput) => {
    // console.log(userInput)
    axios.post(`/api/chores`, { chore: userInput }).then((res) => {
      this.setState({
        chores: res.data
      })
    }).catch((error) => { console.error(error) })
  }

  editChore = (id, userInput) => {
    if (!userInput) {
      alert(`Chore must be edited before submit`)
      return;
    }

    axios.put(`/api/chores/${id}`, { chore: userInput }).then((res) => {
      this.setState({
        chores: res.data
      })
    }).catch((error) => { console.error(error) })
  }

  deleteChore = (id) => {
    axios.delete(`/api/chores/${id}`).then(res => {
      // console.log(res.data)
      this.setState({
        chores: res.data
      })
    }).catch((error) => { console.error(error) })
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
        <Footer />

      </div>
    );
  }
}

export default App;
