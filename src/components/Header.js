import React, { Component } from 'react'
import axios from 'axios'
// import cors from 'cors'
// import weatherSecret from '../config'


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            weatherInfo: '',

        }
    }

    componentDidMount() {
        axios.get(`/api/weather`).then(res => {
            this.setState({
                weatherInfo: res.data
            })
        })
    }



    render() {
        return (
            <header>
                <h1>Farm Chores</h1>
                <div className='weather'>
                    Currently {this.state.weatherInfo} &#8457;
                </div>
            </header>
        )
    }
}

export default Header