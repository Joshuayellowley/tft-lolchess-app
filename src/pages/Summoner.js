import React, { Component } from 'react'
import MatchList from "../components/MatchList"
import SummonerCard from "../components/SummonerCard"

export default class Summoner extends Component {
    
    state = {
        loading: true,
        summoner: null
    }

    getSummonerName(){
        const currentUrlArray = (window.location.href).split("/");
        const summonerName = currentUrlArray[currentUrlArray.length-1];
        return summonerName
    }

    async componentDidMount(){
        const url = "https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/"+this.getSummonerName()+"?api_key=RGAPI-e07ce27e-37e0-4e8a-9f92-145094415adc";
        const response = await fetch(url);
        const data  = await response.json();
        console.log(data)
        console.log(this.getSummonerName())
        this.setState({summoner: data, loading: false})
    }
    
    render() {
        if(this.state.loading || !this.state.summoner){
            return (
                <div>LOADING</div>
            )
        }else{
            return (
            <div>
                <SummonerCard summoner={this.state.summoner}></SummonerCard>
                <MatchList puuid={this.state.summoner.puuid}></MatchList>
            </div>
            )
        }
    }
}
