import React from 'react'
import Chores from './Chores'

//this.props = chores [], DELETE, PUT

function Chorelist(props) {
    // const { chores } = props.chores
    const listChores = props.chores.map((element) => {
        return <Chores editChore={props.editChore} deleteChore={props.deleteChore} chores={element} key={element.id} />
    })

    return (
        <div>
            <h3>Chores To Do</h3>
            {listChores}
            {/* <Chores /> */}

        </div>
    )

}

export default Chorelist