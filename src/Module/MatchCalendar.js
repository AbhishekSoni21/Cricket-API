import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../Css/match-calendar.css';
import HeaderKeyPair from '../config/HeaderKeyPair';
import LoadingOverlay from 'react-loading-overlay';

class MatchCalendar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data:[],
            isActive:true
          }
    }

    componentDidMount(){
        let UrlToFetchData='http://cricapi.com/api/matchCalendar?apikey=ePa0VeHt5SXS8Mn4wAqiJTKw6sg1'
        console.log("UrlToFetchData",UrlToFetchData);
        let tempArr=[];
        fetch(UrlToFetchData)
        .then(response => response.json())
        .then(data =>
        this.setState({
            data:data.data,
            isActive:false
        })
            
            
        )
       
    }
    render() { 
        console.log("this.state.data",JSON.stringify(this.state.data))
        return ( 
            <LoadingOverlay
                className="loader-wrapper"
                active={this.state.isActive}
                spinner
                text='Loading your content...'
                >
            <div className="ag-theme-balham" style={{ height: '600px', width: 'inherit' }}>
            {"Match Calendar"}
            <AgGridReact
                columnDefs={HeaderKeyPair.headerKeyPair}
                rowData={this.state.data}
                enableFilter={true}
                >
            </AgGridReact>
            </div>
            </LoadingOverlay>
                
            
        );
    }
}

export default MatchCalendar;