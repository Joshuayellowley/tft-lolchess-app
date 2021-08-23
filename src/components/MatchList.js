import React, { Component } from 'react'
import MatchItem from './MatchItem';
const api_key = "RGAPI-e07ce27e-37e0-4e8a-9f92-145094415adc"

export default class MatchList extends Component {
    
    state = {
        loading: true,
        summoner: null,
        matches: null
    }

    async componentDidMount(){
        const url = "https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/"+this.props.puuid+"/ids?count=20&api_key="+api_key;
        const response = await fetch(url);
        const data  = await response.json();
        this.setState({matches: data, loading: false})
    }

    render() {
        if(this.state.loading || !this.state.matches){
            return (
                <div>LOADING</div>
            )
        }else{
            return (
            <div>
                <MatchItem puuid={this.props.puuid} match={this.state.matches[0]}></MatchItem>
                <MatchItem puuid={this.props.puuid} match={this.state.matches[1]}></MatchItem>
                <MatchItem puuid={this.props.puuid} match={this.state.matches[2]}></MatchItem>
                <MatchItem puuid={this.props.puuid} match={this.state.matches[3]}></MatchItem>
                <MatchItem puuid={this.props.puuid} match={this.state.matches[4]}></MatchItem>
                <MatchItem puuid={this.props.puuid} match={this.state.matches[5]}></MatchItem>

            </div>
            )
        }
    }
}
