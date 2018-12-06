import React, { Component } from 'react';
import Infocard from '../Components/Infocard';
import LoadingOverlay from 'react-loading-overlay';
class UpcomingMatch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            matchData:"",
         }
    }

    componentDidMount(){
        //debugger
        let UrlToFetchData='http://cricapi.com/api/matches?apikey=ePa0VeHt5SXS8Mn4wAqiJTKw6sg1'
        console.log("UrlToFetchData",UrlToFetchData)
        fetch(UrlToFetchData)
        .then(response => response.json())
        .then(data => this.setState({
            matchData:data.matches
        }));
    }
    render() { 
        console.log("this.state.matchData",this.state.matchData)
        return ( 
            <div className="result-container">
            {"Upcoming Matches"}
            {this.state.matchData.length>0 ? <div className="matchCard-container"><Infocard matchData={this.state.matchData}/></div> : "No Data to display"}
            </div> 
            
        );
    }
}

export default UpcomingMatch;