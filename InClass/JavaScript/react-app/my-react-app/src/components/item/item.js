import React from 'react'
import ItemImage from './itemImg/itemImage'
import ItemDetails from './itemDetails/itemDetails'

class Item extends React.Component{
    render() {
        return (
            <div>
                <ItemImage imgUrl={this.props.url} />
                <ItemDetails details={this.props} />
            </div>
        )
    }
}

export default Item