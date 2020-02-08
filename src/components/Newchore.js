import React, { Component } from 'react'


class Newchore extends Component {
    constructor(props) {
        super(props)
        // this.props = Newchore()

        this.state = {
            userInput: '',
        }
    }

    handleChange = (value) => {
        this.setState({
            userInput: value
        })
    }

    render() {
        return (
            <div>
                <input
                    onChange={(event) => this.handleChange(event.target.value)}
                    placeholder={` Add a New Chore `}
                    value={this.state.userInput}
                />
                <button className="add-button" onClick={() => {
                    this.props.newChore(this.state.userInput)
                    this.setState({ userInput: '' })
                }}>
                    ADD IT!!</button>
            </div>
        )
    }
}

export default Newchore