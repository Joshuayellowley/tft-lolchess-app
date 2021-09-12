import React, { Component } from 'react'
import RankedPanel from "../components/RankedPanel"
import "./styles/SummonerCard.css"

export default class SummonerCard extends Component {
    
    state = {
        loading: true,
        summoner: null,
        rank: null
    }

    async componentDidMount(){
        const url = "https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/"+this.props.summoner.id+"?api_key="+process.env.REACT_APP_API_KEY;
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
                        <div className="rankedPanel">
                            <RankedPanel loading={this.state.loading} rank={this.state.rank}></RankedPanel>   
                        </div>          
                    </label>
                </div>
           )
        }  
    }
}
