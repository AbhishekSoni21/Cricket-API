import React, { Component } from 'react';
import './Css/NavigationBar.css'

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    changeNavSelection = (value) => {
        this.props.updateNavSelection(value)
    }

    render() { 
        console.log(this.state,this.props);
        const currentNav=this.props.currentNav;
        return ( 
            <div className='navigationBar-container'>
                <div className={currentNav==="Upcoming Matches"?'nav-link--selected':"nav-link"} onClick={()=>{this.changeNavSelection("Upcoming Matches")}}>
                    {"Upcoming Matches"}  
                </div>
                
                <div className={currentNav==="Match Calendar"?'nav-link--selected':"nav-link"} onClick={()=>{this.changeNavSelection("Match Calendar")}}>
                    {"Match Calendar"}
                </div>
                
                <div className={currentNav==="Cricket Scores"?'nav-link--selected':"nav-link"} onClick={()=>{this.changeNavSelection("Cricket Scores")}}>
                    {"Cricket Scores"}
                </div>
                
                <div className={currentNav==="Player Stats and Bio"?'nav-link--selected':"nav-link"} onClick={()=>{this.changeNavSelection("Player Stats and Bio")}}>
                    {"Player Stats and Bio"}
                </div>
                
                <div className={currentNav==="Player Finder"?'nav-link--selected':"nav-link"} onClick={()=>{this.changeNavSelection("Player Finder")}}>
                    {"Player Finder"}
                </div>
            </div>
            
        );
    }
}

export default NavigationBar;