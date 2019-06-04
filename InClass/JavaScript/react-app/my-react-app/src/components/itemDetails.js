import React from 'react'
import RoomType from './roomType'
import RoomLocation from './roomLocation'
import RoomName from './roomName'
import RoomRating from './roomRating';

class ItemDetails extends React.Component {
    render() {
        return(
            <div>
                <p><RoomType roomType={this.props.details.roomType} /> - <RoomLocation roomLocation={this.props.details.roomLocation} /></p>
                <RoomName roomName={this.props.details.roomName} />
                <div>
                    <RoomRating roomVotes={this.props.details.roomVotes}/>
                </div>
            </div>
        )
    };
};

export default ItemDetails