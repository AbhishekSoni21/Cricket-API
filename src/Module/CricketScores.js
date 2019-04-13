import React, { Component } from "react";
import "../Css/CricketScore.css";
class CricketScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchId: "",
      data: [],
      isActive: ""
    };
  }

  onSubmitHandler = () => {
    // document
    //   .getElementById("record-container")
    //   .classList.add("mask-playerFinder");
    // document.getElementById("record").classList.add("displayNone");
    if (this.state.matchId.length > 0) {
      let UrlToFetchData = `https://cricapi.com/api/cricketScore?apikey=ePa0VeHt5SXS8Mn4wAqiJTKw6sg1&unique_id=${
        this.state.matchId
      }`;
      console.log("UrlToFetchData", UrlToFetchData);
      fetch(UrlToFetchData, { mode: "cors" })
        .then(response => response.json())
        .then(data =>
          this.setState({
            data: [data],
            isActive: ""
          })
        );
    }
  };
  handleNameChange = e => {
    const matchId = e.target.value;
    this.setState({
      matchId
    });
  };
  render() {
    console.log("----data", this.state.data.length);

    return (
      <div className="body-wrapper">
        <div className="detail-container">
          <div className="name-container">Enter Match Id</div>
          <div className="input-container">
            <input
              onChange={e => this.handleNameChange(e)}
              placeholder="Enter match Id"
            />
          </div>
          <div className="button-container">
            <button className="button" onClick={this.onSubmitHandler}>
              Submit
            </button>
          </div>
        </div>
        {this.state.data.length > 0 ? (
          this.state.data.map((data, index) => (
            <div className="match-detail-container">
              <div className="title">Match Details</div>
              <div className="teamNameContainer">
                <div className="teamName">{data["team-1"]}</div>
                <div className="Vs">Vs</div>
                <div className="teamName">{data["team-2"]}</div>
              </div>
              <div className="score-container">
                <div className="score">{data.score.split("v")[0]}</div>
                <div className="score">{data.score.split("v")[1]}</div>
              </div>
            </div>
          ))
        ) : (
          <div id="no-data-cricketScore" className="no-data-cricketScore">
            Search Cricket Score
          </div>
        )}
      </div>
    );
  }
}

export default CricketScore;
