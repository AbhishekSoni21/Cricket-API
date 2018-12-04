import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './Css/Header.css'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='header-container'>
                <div className='header-container-wrapper'>
                    <div className='header-logo'>
                        {"Cric API"}
                    </div>
                    <div className='navigation-bar-container'>
                        <NavigationBar/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;