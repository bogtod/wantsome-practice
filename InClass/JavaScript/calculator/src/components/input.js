import React from 'react'

class Input extends React.Component{
    
    render() {
        return (
            <div>
                <div id="output">Output is: {this.props.output}</div>
                <div id="result">Result is: {this.props.result}</div>
                <div id="current">Current is: {this.props.current}</div>
            </div>
        )
    }

};


export default Input;