import React, { Component } from 'react';
import './Css/NavigationBar.css'

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='navigationBar-container'>
                <div>
                    {"Upcoming Matches"}  
                </div>
                
                <div>
                    {"Match Calendar"}
                </div>
                
                <div>
                    {"Cricket Scores"}
                </div>
                
                <div>
                    {"Player Stats and Bio"}
                </div>
                
                <div>
                    {"Player Finder"}
                </div>
            </div>
            
        );
    }
}

export default NavigationBar;