import React from 'react'

const ClearBtn = (props) => {
    return <button onClick={e => props.onClick('clear')} >Clear</button>
}


export default ClearBtn;