import React, { Component } from 'react'

export default class RankedPanel extends Component {
 
    render() {
        if(this.props.loading){
            return <div>LOADING</div>
        }else{
            return (
                <div>
                    <div>
                        <div className="tier">{this.props.rank[0].tier} {this.props.rank[0].rank}</div>
                        <div className="leaguePoints">LP: {this.props.rank[0].leaguePoints}</div>
                        <div className="wins">Wins: {this.props.rank[0].wins}</div>
                        <div className="losses">Played: {this.props.rank[0].wins+this.props.rank[0].losses}</div>
                    </div>
                </div>
            )
        }
    }
}
