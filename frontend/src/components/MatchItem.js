import React, { Component } from 'react'
import './styles/MatchItem.css';

const api_key = process.env.API_KEY;


export default class MatchItem extends Component {

    state = {
        match: null
    }

    getChampionIconUrl(description){
        switch(description){
            case "tft5_olaf":
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            case "tft5_senna":
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            case "tft5_pyke":
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            case "tft5_irelia":
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            case "tft5_rakan":
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            case "tft5_galio":
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            case "tft5_lucian":
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/tft_lucian.png';
            case "tft5_akshan":
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            case "tft5_gwen":
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            case "tft5_fiddlesticks":
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            case "tft5_missfortune":
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            case "tft5_tristana":
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            default:
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5.png';
        }
    }

    getColorBasedOnRarity(rarity){
        switch(rarity){
            case 0:
                return "grey";
            case 1:
                return "green";
            case 2:
                return "blue";
            case 3:
                return "purple";
            case 4:
                return "orange";
            default:
                return "red";
        }
    }

    getColorForGamePlacement(placement){
        if(placement === 1){
            return "seagreen"
        }else if(placement > 1 && placement <= 4){
            return "royalblue"
        }else{
            return "grey"
        }
    }

    getPlayerIndex(){
        for(var i = 0; i < 8; i++){
            if(this.props.puuid === this.state.match.metadata.participants[i]){
                return i;
            }
        }
    }

    async componentDidMount(){
        const url = "https://americas.api.riotgames.com/tft/match/v1/matches/"+this.props.match+"?api_key="+process.env.REACT_APP_API_KEY;
        const response = await fetch(url);
        const data  = await response.json();
        console.log(data)
        this.setState({match: data, loading: false})
    }

    render() {
        if(this.state.loading || !this.state.match){
            return (
                <div>LOADING</div>
            )
        }else{
            const playerIndex = this.getPlayerIndex();
            const championArray = this.state.match.info.participants[playerIndex].units;
            const gamePlacement = this.state.match.info.participants[playerIndex].placement;
            const placementColour = this.getColorForGamePlacement(gamePlacement)
            return (
                <div className='matchItemContainer' style={{border: "solid "+placementColour, borderWidth: "8px 20px"}}>
                    <div className="placement" style={{color: placementColour}}>#{gamePlacement}</div>
                        <div className="championIconContainer">
                        {championArray.map((answer, i) => {  
                            const championCostColor = this.getColorBasedOnRarity(answer.rarity);
                            const starLevel = +answer.tier;
                            return (
                            <div>
                                <div className="starLevelIcon" style={{color: championCostColor}}>{"★".repeat(starLevel)}</div>
                                <div className="championIconBorder" style={{border: championCostColor+" solid 4px"}}>
                                    <img className="championIcon" src={this.getChampionIconUrl(answer.character_id.toLowerCase())} alt=''></img>
                                </div>
                            </div>
                            )
                        })}
                    </div>   
                </div>
            )
        }
    }
}
