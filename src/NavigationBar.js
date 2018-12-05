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
        return ( 
            <div className='navigationBar-container'>
                <div className='nav-link' onClick={()=>{this.changeNavSelection("Upcoming Matches")}}>
                    {"Upcoming Matches"}  
                </div>
                
                <div className='nav-link' onClick={()=>{this.changeNavSelection("Match Calendar")}}>
                    {"Match Calendar"}
                </div>
                
                <div className='nav-link' onClick={()=>{this.changeNavSelection("Cricket Scores")}}>
                    {"Cricket Scores"}
                </div>
                
                <div className='nav-link' onClick={()=>{this.changeNavSelection("Player Stats and Bio")}}>
                    {"Player Stats and Bio"}
                </div>
                
                <div className='nav-link' onClick={()=>{this.changeNavSelection("Player Finder")}}>
                    {"Player Finder"}
                </div>
            </div>
            
        );
    }
}

export default NavigationBar;