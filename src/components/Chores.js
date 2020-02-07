import React, { Component } from 'react'


class Chores extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props.chores.id)
        this.state = {
            userInput: '',
            isEditing: false

        }
    }

    editToggle = () => {

    }

    handleChange = () => {

    }


    render() {
        return (
            <div>
                <p>
                    {this.props.chores.chore}


                    <button>Edit</button>



                    <button onClick={() => {
                        this.props.deleteChore(this.props.chores.id)
                    }}
                    >Delete
                    </button>
                </p>
            </div>
        )
    }



}

export default Chores