import React, { Component } from 'react';
import Infocard from '../Components/Infocard';
import LoadingOverlay from 'react-loading-overlay';
import '../Css/loader.css';
class UpcomingMatch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            matchData:"",
            isActive:true
        }
    }

    componentDidMount(){
        //debugger
        let UrlToFetchData='http://cricapi.com/api/matches?apikey=ePa0VeHt5SXS8Mn4wAqiJTKw6sg1'
        console.log("UrlToFetchData",UrlToFetchData)
        fetch(UrlToFetchData)
        .then(response => response.json())
        .then(data => this.setState({
            matchData:data.matches,
            isActive:false
        }));
    }
    render() { 
        console.log("this.state.matchData",this.state.matchData)
        return (
            <LoadingOverlay
                className="loader-wrapper"
                active={this.state.isActive}
                spinner
                text='Loading your content...'
                >
                <div className="result-container">
                <div className="result-display-header">{"Upcoming Matches"}</div>
                {this.state.matchData.length>0 ? <div className="matchCard-container"><Infocard matchData={this.state.matchData}/></div> : ""}
            </div>
            </LoadingOverlay> 
        );
    }
}

export default UpcomingMatch;