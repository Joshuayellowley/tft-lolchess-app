import React, { Component } from 'react'
import "./styles/RankedPanel.css"

export default class RankedPanel extends Component {
 

    getTierLogo(tier){
        if(!tier){
            return "https://raw.communitydragon.org/11.16/game/assets/ux/tftmobile/particles/tft_regalia_provisional.png";
        }
        switch(tier.toLowerCase()){
            case "iron":
                return "https://raw.communitydragon.org/11.16/game/assets/ux/tftmobile/particles/tft_regalia_iron.png";
            case "bronze":
                return "https://raw.communitydragon.org/11.16/game/assets/ux/tftmobile/particles/tft_regalia_bronze.png";
            case "silver":
                return "https://raw.communitydragon.org/11.16/game/assets/ux/tftmobile/particles/tft_regalia_silver.png";
            case "gold":
                return "https://raw.communitydragon.org/11.16/game/assets/ux/tftmobile/particles/tft_regalia_gold.png";
            case "platinum":
                return "https://raw.communitydragon.org/11.16/game/assets/ux/tftmobile/particles/tft_regalia_platinum.png";
            case "diamond":
                return "https://raw.communitydragon.org/11.16/game/assets/ux/tftmobile/particles/tft_regalia_diamond.png";
            case "master":
                return "https://raw.communitydragon.org/11.16/game/assets/ux/tftmobile/particles/tft_regalia_master.png";
            case "grandmaster":
                return "https://raw.communitydragon.org/11.16/game/assets/ux/tftmobile/particles/tft_regalia_grandmaster.png";
            case "challenger":
                return "https://raw.communitydragon.org/11.16/game/assets/ux/tftmobile/particles/tft_regalia_challenger.png";
            default:
                return "https://raw.communitydragon.org/11.16/game/assets/ux/tftmobile/particles/tft_regalia_provisional.png";
        }
    }


    render() {
        if(this.props.loading){
            return <div>LOADING</div>
        }else{
            if(this.props.rank[0]){
                const tierLogo = this.getTierLogo(this.props.rank[0].tier);
                console.log(this.props.rank[0].tier)
                return (
                    <div>
                        <div className="rankedPanelContainer">
                            <div className="tierLogoContainer">
                                <img className="tierLogo" src={tierLogo} alt=""></img>
                            </div>
                            <div className="tier">{this.props.rank[0].tier ? this.props.rank[0].tier : "UNRANKED"} {this.props.rank[0].rank}</div>
                            <div className="leaguePoints">LP: {this.props.rank[0].leaguePoints ? this.props.rank[0].leaguePoints : 0}</div>
                            <div className="wins">Wins: {this.props.rank[0].wins}</div>
                            <div className="losses">Played: {this.props.rank[0].wins+this.props.rank[0].losses}</div>
                        </div>
                    </div>
                )
            }else{
                return (
                    <div>
                        <div className="rankedPanelContainer">
                            <div className="tierLogoContainer">
                                <img className="tierLogo" src="https://raw.communitydragon.org/11.16/game/assets/ux/tftmobile/particles/tft_regalia_provisional.png"alt=""></img>
                            </div>
                            <div className="tier">UNRANKED</div>
                            <div className="leaguePoints">LP: 0</div>
                            <div className="wins">Wins: N/A</div>
                            <div className="losses">Played: N/A</div>
                        </div>
                    </div>
                ) 
            }
        }
    }
}
