import React from 'react'
import Chores from './Chores'

//this.props = chores [], DELETE, PUT

function Chorelist(props) {

    return (
        <div>
            <p>
                <h3>Chores To Do</h3>
                <Chores />
            </p>
        </div>
    )

}

export default Chorelist