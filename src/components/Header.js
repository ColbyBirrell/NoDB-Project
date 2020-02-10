import React, { Component } from 'react'
// import axios from 'axios'
// import cors from 'cors'
// import weatherSecret from '../config'


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            weatherInfo: '',

        }
    }


    // componentDidMount() {
    //     axios.get(`https://api.darksky.net/forecast/${weatherSecret}/40.4463,-111.8021`).then((res) => {
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
                {/* <div>
                    {this.state.weatherInfo}
                </div> */}
            </header>
        )
    }
}

export default Header