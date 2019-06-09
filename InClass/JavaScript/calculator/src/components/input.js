import React from 'react'

class Input extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            text: "Initial State"
        }
    }

    updateState(text){
        this.setState({text})
    };

    render() {
        return (this.state.text)
    }

};


export default Input;