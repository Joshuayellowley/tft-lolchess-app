import React, { Component } from 'react'
import RankedPanel from "../components/RankedPanel"
import "./styles/SummonerCard.css"
const api_key = "RGAPI-e07ce27e-37e0-4e8a-9f92-145094415adc"

export default class SummonerCard extends Component {
    
    state = {
        loading: true,
        summoner: null,
        rank: null
    }

    async componentDidMount(){
        const url = "https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/"+this.props.summoner.id+"?api_key="+api_key;
        const response = await fetch(url);
        const data  = await response.json();
        this.setState({rank: data, loading: false})
    }

    render() {
        if(this.state.loading || !this.state.rank){
            return (
                <div>LOADING</div>
            )
        }else{
            return (
                <div>
                    <label className="summonerCardContainer">
                        <div className="profilePictureContainer">
                            <img className="profilePicture" src={"https://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/"+this.props.summoner.profileIconId+".png"} alt=""></img>
                        </div>
                        <div>
                            <div className="summonerName">{this.props.summoner.name}</div>
                            <div className="level">LEVEL {this.props.summoner.summonerLevel}</div>
                        </div>
                        <RankedPanel loading={this.state.loading} rank={this.state.rank}></RankedPanel>               
                    </label>
                </div>
           )
        }  
    }
}
