import React, { Component } from "react";
import "../Css/playerFinder.css";
import DetailReport from "./../Components/detailedReport";
class PlayerFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: []
    };
  }

  removemask = () => {
    document
      .getElementById("record-container")
      .classList.remove("mask-playerFinder");
    document.getElementById("record").classList.remove("displayNone");
  };

  onSubmitHandler = () => {
    document
      .getElementById("record-container")
      .classList.add("mask-playerFinder");
    document.getElementById("record").classList.add("displayNone");
    if (this.state.name.length > 0) {
      let UrlToFetchData = `http://cricapi.com/api/playerFinder?apikey=ePa0VeHt5SXS8Mn4wAqiJTKw6sg1&name=${
        this.state.name
      }`;
      console.log("UrlToFetchData", UrlToFetchData);
      fetch(UrlToFetchData, { mode: "cors" })
        .then(response => response.json())
        .then(data =>
          this.setState(
            {
              data: data.data,
              isActive: ""
            },
            () => {
              this.removemask();
            }
          )
        );
    }
  };

  handleNameChange = e => {
    const name = e.target.value;
    this.setState({
      name
    });
  };

  handleCopy = value => {
    this.refs.pid.select();
    document.execCommand("copy");
  };
  render() {
    return (
      <div className="player-finder-container">
        <div className="detail-container">
          <div className="name-container">Enter Name</div>
          <div className="input-container">
            <input
              onChange={e => this.handleNameChange(e)}
              placeholder="Enter a player name"
            />
          </div>
          <div className="button-container">
            <button className="button" onClick={this.onSubmitHandler}>
              Submit
            </button>
          </div>
        </div>
        <div id="record-container">
          <div id="record" className="record-container">
            {this.state.data.length > 0 ? (
              this.state.data.map((player, index) => (
                <DetailReport index={index} player={player} />
              ))
            ) : (
              <div id="no-data-playerFinder" className="no-data-playerFinder">
                Find Player details
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerFinder;
