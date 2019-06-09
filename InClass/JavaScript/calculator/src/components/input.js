import React from 'react'

class Input extends React.Component{
    
    render() {
        return (
            <div>
                <div id="output">{this.props.output}</div>
                <div id="current">{this.props.current}</div>
            </div>
        )
    }

};


export default Input;