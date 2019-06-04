import React from 'react'
import RoomVotes from './roomVotes'

class RoomRating extends React.Component{
    render() {
        return (
            <div>star-star-star <RoomVotes roomVotes={this.props.roomVotes} /></div>
        )
    }
};


export default RoomRating;