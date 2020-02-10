import React, { Component } from 'react'
// import axios from 'axios'
// import cors from 'cors'



class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            weatherInfo: '',
            weatherSecret: 'cd2d1da83ba4966a33e77d66c77a8539'
        }
    }


    // componentDidMount() {
    //     axios.get(`https://api.darksky.net/forecast/${this.state.weatherSecret}/40.4463,-111.8021`).then((res) => {
    //         console.log(res.data)
    //         this.setState({
    //             weatherInfo: `${res.data.currently.temperature} ${res.data.currently.summary}`
    //         })
    //     })
    // }


    render() {
        return (
            <header>
                <h1>Farm Chores</h1>
            </header>
        )
    }
}

export default Header