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
                    placeholder={`Newchore.js add a chore`}
                />
                <button onClick={() => { return this.props.newChore(this.state.userInput) }}>Add to Chores</button>
            </div>
        )
    }
}

export default Newchore