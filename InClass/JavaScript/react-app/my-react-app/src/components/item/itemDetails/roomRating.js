import React from 'react'
import RoomVotes from './roomVotes'

class RoomRating extends React.Component{
    render() {
        return (
            <div>
                <img src={this.props.rating} alt="tripadvisor-rating" />
                <RoomVotes roomVotes={this.props.roomVotes} />
            </div>
        )
    }
};


export default RoomRating;