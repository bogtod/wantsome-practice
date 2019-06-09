import React, { Component } from 'react';
import Item from './item/item'

class Main extends Component{

    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/bogtod/wantsome-practice/master/data.json')
        // .then(resp => resp.json())
        .then(resp => resp.json())
        .then(data => this.setState({ data }))
    }

    
    printHotels() {
        let items = [];
        if(this.state.data.length !== 0) {
            this.state.data.map(item => {
                items.push(<Item roomLocation={item.city} roomName={item.name} roomType={item.type} roomVotes={item.tripAdvisorRating} rating={item.tripAdvisorRatingUrl} url={item.thumbNailUrl} />)
            })
        }
        return items;
    }
    

    render() {
        
        return (
            <div>
                {this.printHotels()}
            </div>
        )
    };
};

export default Main;