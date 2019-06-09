import React, { Component } from 'react';
import Item from './item.js'

class Main extends Component{

    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/bogtod/wantsome-practice/master/data.json')
        // .then(resp => resp.json())
        .then(resp => resp.json())
        .then(resp => this.stateSetting(resp))
    }

    stateSetting(response) {
        // this.setState({data: response});
        console.log(response)
    }

    

    render() {
        return (
            <div>
                <Item roomLocation="Rome" roomName="Penthouse Campo de Fiori" roomType="Entire Apartment" roomVotes="456" url="https://s-ec.bstatic.com/images/hotel/max1024x768/731/73118462.jpg"/>
                <Item roomLocation="Madrid" roomName="Penthouse of Madrid" roomType="One Room" roomVotes="350" url="https://www.mabuhaymanor.com.ph/wp-content/uploads/2018/07/kabayan-hotel-room-premium.jpg"/>
                <Item roomLocation="Barcelona" roomName="Penthouse of Barcelona" roomType="Two Rooms" roomVotes="780" url="https://www.mabuhaymanor.com.ph/wp-content/uploads/2018/07/kabayan-hotel-room-premium.jpg"/>
            </div>
        )
    };
};

export default Main;