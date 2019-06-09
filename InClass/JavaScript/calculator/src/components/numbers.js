import React from 'react'
import Input from './input'

class Numbers extends React.Component {
    
    updateInput(e) {
        console.log(e.target.name);
        
    }
    
    
      render() {
        return (
          <button onClick={this.updateInput} name={this.props.num}>{this.props.num}</button>
        );
    }

};

export default Numbers;