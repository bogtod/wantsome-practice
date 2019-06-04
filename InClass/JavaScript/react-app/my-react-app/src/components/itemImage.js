import React from 'react'

class ItemImage extends React.Component{
    render() {
        return <img src={this.props.imgUrl} alt="hotel-room" />
    }
}

export default ItemImage