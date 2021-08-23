import React, { Component } from 'react'
const api_key = "RGAPI-e07ce27e-37e0-4e8a-9f92-145094415adc"


export default class MatchItem extends Component {

    state = {
        match: null
    }

    getChampionIconUrl(description){
        console.log(description)
        switch(description){
            case "tft5_olaf":
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
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            case "tft5_akshan":
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            case "tft5_gwen":
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            case "tft5_fiddlesticks":
        return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5_stage2.png';
            default:
                return 'https://raw.communitydragon.org/11.16/game/assets/ux/tft/championsplashes/'+description+'.tft_set5.png';
        }
    }

    getPlayerIndex(){
        for(var i = 0; i < 8; i++){
            if(this.props.puuid === this.state.match.metadata.participants[i]){
                return i;
            }
        }
    }

    getMatchImages(championArray){
        
    }

    async componentDidMount(){
        const url = "https://americas.api.riotgames.com/tft/match/v1/matches/"+this.props.match+"?api_key="+api_key;
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


            return (
                <div>
                    <div>
                        <div>Placement: {gamePlacement}</div>
                        {championArray.map((answer, i) => {     
                            return (<img src={this.getChampionIconUrl(answer.character_id.toLowerCase())} alt=''></img>) 
                        })}
                    </div>   
                </div>
            )
        }
    }
}
