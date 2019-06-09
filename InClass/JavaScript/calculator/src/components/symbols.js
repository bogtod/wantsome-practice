import React from 'react'

const Symbols = (props) => {
    return <button onClick={e => props.onClick(e.target.name, 'sym')} name={props.symbol}>{props.symbol}</button>
}


export default Symbols;