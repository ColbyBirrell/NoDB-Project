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
        this.setState({
            isEditing: !this.state.isEditing
        })

    }

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }


    render() {
        return (
            <div>
                {this.state.isEditing ? (
                    <div>
                        <input onChange={this.handleChange} />
                        <button
                            onClick={() => {
                                this.props.editChore(this.props.chores.id, this.state.userInput)
                                this.editToggle()
                            }}
                        >
                            SAVE IT!</button>
                    </div>
                ) : (
                        <p onDoubleClick={this.editToggle} >
                            {this.props.chores.chore}
                        </p>
                    )
                }





                <button onClick={() => {
                    this.props.deleteChore(this.props.chores.id)
                }}
                >Delete
                    </button>


            </div>
        )
    }



}

export default Chores