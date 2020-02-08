import React from 'react'
import Newchore from './Newchore'

//this.props = newChore

function Addchore(props) {
    return (
        <div className='add-container'>
            <Newchore newChore={props.newChore} />
        </div>
    )
}

export default Addchore