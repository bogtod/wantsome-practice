import React from 'react'

const Symbols = (props) => {
    return <button className="symbol" value={props.symbol}>{props.symbol}</button>
}


export default Symbols;