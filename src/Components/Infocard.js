import React, { Component } from 'react';
import '../Css/Infocard.css'
class Infocard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    generateMatchCard = (match,index) =>{
        console.log(match["squad"])
            return (
                <div className="card-container">
                    <div className="label-container">
                        <div className="label">{"Team 1"}</div>
                        <div className="label-value">{match["team-1"]}</div>
                    </div>
                    <div className="label-container">
                        <div className="label">{"Team 2"}</div>
                        <div className="label-value">{match["team-2"]}</div>
                    </div>
                    <div className="label-container">
                        <div className="label">{"Date"}</div>
                        <div className="label-value">{match["date"]}</div>
                    </div>
                    <div className="label-container">
                        <div className="label">{"Match Started"}</div>
                        <div className="label-value">{JSON.stringify(match["matchStarted"])}</div>
                    </div>
                    <div className="label-container">
                        <div className="label">{"Squad"}</div>
                        <div className="label-value">{JSON.stringify(match["squad"])}</div>                        </div>
                    </div>
            )
    }    
    render() { 
            const matchData = this.props.matchData
        return ( 
            matchData.map((match,index)=>{
                return this.generateMatchCard(match,index)
            })
        );
    }
}

export default Infocard;