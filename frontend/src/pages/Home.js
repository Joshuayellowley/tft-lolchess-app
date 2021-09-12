import React, { Component } from 'react'
import SummonerNameEntry from '../components/SummonerNameEntry';
import './styles/Home.css';

export default class Home extends Component {

    state = {
        summonerName: ""
    }

    handleChange(event) {
        this.setState({summonerName: event.target.summonerName});
        console.log(this.state.summonerName);
    }

    render() {
        return (
                <div className='backgroundImage'>
                    <div className="title">
                        TFT Set 5.5 Match History Tool
                    </div>
                    <div className="introMessage">
                        Enter your North America username below! (Or use mine 'Jashy')
                    </div>
                    <SummonerNameEntry></SummonerNameEntry>
                </div>
        )
    }
}
