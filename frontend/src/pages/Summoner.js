import React, { Component } from 'react'
import MatchList from "../components/MatchList"
import SummonerCard from "../components/SummonerCard"
import "./styles/Summoner.css"

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
        const url = "https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/"+this.getSummonerName()+"?api_key="+process.env.REACT_APP_API_KEY;
        const response = await fetch(url);
        const data  = await response.json();
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
            <div className="summonerContainer">
                <SummonerCard summoner={this.state.summoner}></SummonerCard>
                <MatchList puuid={this.state.summoner.puuid}></MatchList>
            </div>
            )
        }
    }
}
