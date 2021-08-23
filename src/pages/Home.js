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
            <div>
                <div className='backgroundImage'>
                    <h1 className="title">
                        TFT Profile Check Application
                    </h1>
                    <SummonerNameEntry></SummonerNameEntry>
                </div>
            </div>
        )
    }
}
