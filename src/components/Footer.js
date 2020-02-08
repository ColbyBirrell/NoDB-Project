import React, { Component } from 'react'
import axios from 'axios'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chuckQuote: ''
        }
    }

    componentDidMount() {
        axios.get(`https://api.chucknorris.io/jokes/random`).then((res) => {
            // console.log(res.data)
            this.setState({
                chuckQuote: res.data.value
            })
        })
    }




    render() {
        return (
            <footer>
                <p> {this.state.chuckQuote}</p>
            </footer>
        )
    }


}

export default Footer