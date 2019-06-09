import React from 'react'

class Numbers extends React.Component {
    
    render() {
        return (
          <button onClick={e => this.props.onClick(e.target.name, 'num')} name={this.props.num}>{this.props.num}</button>
        );
    }

};

export default Numbers;