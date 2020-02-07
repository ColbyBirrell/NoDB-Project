import React, { Component } from 'react'


class Chores extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: '',
            isEditing: false

        }
    }


    render() {
        return (
            <div>
                <p>
                    Chores.js
                    <button>Edit</button>
                    <button>Delete</button>
                </p>
            </div>
        )
    }



}

export default Chores