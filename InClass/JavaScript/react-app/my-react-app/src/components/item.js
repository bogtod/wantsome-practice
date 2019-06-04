import React from 'react'
import ItemImage from './itemImage'
import ItemDetails from './itemDetails'

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