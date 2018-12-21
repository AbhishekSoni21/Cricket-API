import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './Css/Header.css';
import './Css/upcomingMatch.css';
import UpcomingMatch from './Module/UpcomingMatches';
import MatchCalendar from './Module/MatchCalendar';
import CricketScore from './Module/CricketScores';
import PlayerStatsBio from './Module/PlayerStatsBio';
import PlayerFinder from './Module/PlayerFinder';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentNav:'',
            dashboard:'',
            selectedDashboardCss:''
        }
    }

    updateNavSelection = (value) => {
        this.setState({
            currentNav:value
        })
    }

    generateBody = () => {
        console.log("this.state.currentNav",this.state.currentNav);
        if(this.state.currentNav==='Upcoming Matches'){
                return <UpcomingMatch className="upcoming-match-container"/>

        }
        else if(this.state.currentNav==='Match Calendar'){
                return <MatchCalendar/>
        }
        else if(this.state.currentNav==='Cricket Scores'){
                return <CricketScore/>
        }
        else if(this.state.currentNav==='Player Stats and Bio'){
                return <PlayerStatsBio/>
        }
        else if(this.state.currentNav==='Player Finder'){
                return <PlayerFinder/>
        }
    }
    render() { 
        console.log("current selection is",this.state.currentNav);
        
        return ( 
            <div className='header-container'>
                <div className='header-container-wrapper'>
                    <div className='header-logo'>
                        {"Cric API"}
                    </div>
                    <div className='navigation-bar-container'>
                        <NavigationBar 
                            currentNav={this.state.currentNav}
                            updateNavSelection={this.updateNavSelection}                        
                        />
                    </div>
                </div>
                <div className="dashboard-container">
                <div className={this.state.selectedDashboardCss}>{this.generateBody()}</div>
                </div>
            </div>
        );
    }
}

export default Header;