import React, { Component } from 'react'
import './styles/SummonerNameEntry.css'
import { BrowserRouter as Link} from "react-router-dom"

export default class SummonerNameEntry extends Component {

    
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) { this.setState({value: event.target.value});  }
    handleSubmit() {
        console.log(this.state.value);
    }

    render() {
        return (
            <div>
                <div>
                    <Link to={"./summoner/" + this.state.value}>
                        <button  className="submitButton" type="submit" onClick={this.handleSubmit}>SEARCH</button>
                    </Link>
                    <input className="summonerNameEntry" type='text' value={this.state.value} onChange={this.handleChange}></input>
                </div>
            </div>
        )
    }
}
