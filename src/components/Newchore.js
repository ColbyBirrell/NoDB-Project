import React, { Component } from 'react'


class Newchore extends Component {
    constructor(props) {
        super(props)
        // this.props = Newchore()

        this.state = {
            userInput: '',
        }
    }


    render() {
        return (
            <div>
                {/* Newchore.js */}
                <input placeholder={`Newchore.js add a chore`} />
                <button>Add to Chores</button>
            </div>
        )
    }
}

export default Newchore