import React, { Component } from "react";
import "../Css/playerStatsBio.css";
class PlayerStatsBio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: "",
      data: []
    };
  }

  onSubmitHandler = () => {
    if (this.state.pid.length > 0) {
      let UrlToFetchData = `http://cricapi.com/api/playerStats?apikey=ePa0VeHt5SXS8Mn4wAqiJTKw6sg1&pid=${
        this.state.pid
      }`;
      fetch(UrlToFetchData, { mode: "cors" })
        .then(response => response.json())
        .then(data =>
          this.setState({
            data: [data],
            isActive: true
          })
        );
    }
  };

  handlePidChange = e => {
    const pid = e.target.value;
    this.setState({
      pid
    });
  };

  generateStatisticDom = value => {
    // const data = value;
    const { bowling, batting } = value;
    let mainBowlList = [],
      mainBatList = [];
    let BwOdi = [],
      BwListA = [],
      BwFirstClass = [],
      BwT20 = [],
      BwTests = [];

    let BtOdi = [],
      BtListA = [],
      BtFirstClass = [],
      BtT20 = [],
      BtTests = [];

    const {
      ODIs: bowlingODI,
      T20Is: bowlingT20,
      firstClass: bowlingFirstClass,
      listA: bowlingListA,
      tests: bowlingTest
    } = bowling;
    const {
      ODIs: battingODI,
      T20Is: battingT20,
      firstClass: battingFirstClass,
      listA: battingListA,
      tests: battingTest
    } = batting;
    for (let key in bowlingListA) {
      BwListA.push(
        <div className="data-container" key={key}>
          <div className="bowl-key">{key}</div>
          <div className="bowl-value">
            {bowlingListA[key].length > 0 ? bowlingListA[key] : "NA"}
          </div>
        </div>
      );
    }

    for (let key in bowlingFirstClass) {
      BwFirstClass.push(
        <div className="data-container" key={key}>
          <div className="bowl-key">{key}</div>
          <div className="bowl-value">
            {bowlingFirstClass[key].length > 0 ? bowlingFirstClass[key] : "NA"}
          </div>
        </div>
      );
    }

    for (let key in bowlingT20) {
      BwT20.push(
        <div className="data-container" key={key}>
          <div className="bowl-key">{key}</div>
          <div className="bowl-value">
            {bowlingT20[key].length > 0 ? bowlingT20[key] : "NA"}
          </div>
        </div>
      );
    }

    for (let key in bowlingODI) {
      BwOdi.push(
        <div className="data-container" key={key}>
          <div className="bowl-key">{key}</div>
          <div className="bowl-value">
            {bowlingODI[key].length > 0 ? bowlingODI[key] : "NA"}
          </div>
        </div>
      );
    }

    for (let key in bowlingTest) {
      BwTests.push(
        <div className="data-container" key={key}>
          <div className="bowl-key">{key}</div>
          <div className="bowl-value">
            {bowlingTest[key].length > 0 ? bowlingTest[key] : "NA"}
          </div>
        </div>
      );
    }

    for (let key in battingListA) {
      BtListA.push(
        <div className="data-container" key={key}>
          <div className="bat-key">{key}</div>
          <div className="bat-value">
            {battingListA[key].length > 0 ? battingListA[key] : "NA"}
          </div>
        </div>
      );
    }

    for (let key in battingFirstClass) {
      BtFirstClass.push(
        <div className="data-container" key={key}>
          <div className="bat-key">{key}</div>
          <div className="bat-value">
            {battingFirstClass[key].length > 0 ? battingFirstClass[key] : "NA"}
          </div>
        </div>
      );
    }

    for (let key in battingT20) {
      BtT20.push(
        <div className="data-container" key={key}>
          <div className="bat-key">{key}</div>
          <div className="bat-value">
            {battingT20[key].length > 0 ? battingT20[key] : "NA"}
          </div>
        </div>
      );
    }

    for (let key in battingODI) {
      BtOdi.push(
        <div className="data-container" key={key}>
          <div className="bat-key">{key}</div>
          <div className="bat-value">
            {battingODI[key].length > 0 ? battingODI[key] : "NA"}
          </div>
        </div>
      );
    }

    for (let key in battingTest) {
      BtTests.push(
        <div className="data-container" key={key}>
          <div className="bat-key">{key}</div>
          <div className="bat-value">
            {battingTest[key].length > 0 ? battingTest[key] : "NA"}
          </div>
        </div>
      );
    }

    mainBowlList.push(
      <div className="bowl" key={1}>
        <div className="bowl-section">
          <div className="category-name">List A</div>
          <div className="bowl-category">{BwListA}</div>
        </div>
        <div className="bowl-section">
          <div className="category-name">First Class</div>
          <div className="bowl-category">{BwFirstClass}</div>
        </div>
        <div className="bowl-section">
          <div className="category-name">T20</div>
          <div className="bowl-category">{BwT20}</div>
        </div>{" "}
        <div className="bowl-section">
          <div className="category-name">ODI</div>
          <div className="bowl-category">{BwOdi}</div>
        </div>
        <div className="bowl-section">
          <div className="category-name">Tests</div>
          <div className="bowl-category">{BwTests}</div>
        </div>
      </div>
    );
    mainBatList.push(
      <div className="bat" key={2}>
        <div className="bat-section">
          <div className="category-name">List A</div>
          <div className="bat-category">{BtListA}</div>
        </div>
        <div className="bat-section">
          <div className="category-name">First Class</div>
          <div className="bat-category">{BtFirstClass}</div>
        </div>
        <div className="bat-section">
          <div className="category-name">T20</div>
          <div className="bat-category">{BtT20}</div>
        </div>
        <div className="bat-section">
          <div className="category-name">ODI</div>
          <div className="bat-category">{BtOdi}</div>
        </div>
        <div className="bat-section">
          <div className="category-name">Tests</div>
          <div className="bat-category">{BtTests}</div>
        </div>
      </div>
    );

    return [
      <div className="category-container" key={1}>
        <div className="category-container-wrapper">
          <div className="bowling-section">Bowling</div>
          <div className="main-category">{mainBowlList}</div>
        </div>
        <div className="category-container-wrapper">
          <div className="batting-section">Batting</div>
          <div className="main-category">{mainBatList}</div>
        </div>
      </div>
    ];

    // const keys = Object.keys(data);
    // console.log("keys", keys);
    // const values = Object.values(data);
    // { keys[0]}=values;
    // console.log("values", values);
    // keys.map((d,i) => {
    //   {d}:
    // })
  };
  render() {
    return (
      <div className="player-finder-container">
        <div className="detail-container">
          <div className="name-container">Enter Player Id </div>
          <div className="input-container">
            <input
              onChange={e => this.handlePidChange(e)}
              placeholder="Enter a player id"
            />
          </div>
          <div className="button-container">
            <button className="button" onClick={this.onSubmitHandler}>
              Submit
            </button>
          </div>
        </div>
        <div className="playerStatsBio-wrapper">
          {this.state.data.length > 0 ? (
            <div className="playerStatsMain">
              <div className="playerStatsBio-container-wrapper">
                <div className="playerStatsBio-container">
                  <div className="label-container">
                    <div className="player-label">Player Id</div>
                    <div className="label-data">{this.state.data[0].pid}</div>
                  </div>
                  <div className="label-container">
                    <div className="player-label">Name</div>
                    <div className="label-data">{this.state.data[0].name}</div>
                  </div>
                  <div className="label-container">
                    <div className="player-label">Full Name</div>
                    <div className="label-data">
                      {this.state.data[0].fullName}
                    </div>
                  </div>
                  <div className="label-container">
                    <div className="player-label">Born</div>
                    <div className="label-data">{this.state.data[0].born}</div>
                  </div>
                  <div className="label-container">
                    <div className="player-label">Current Age</div>
                    <div className="label-data">
                      {this.state.data[0].currentAge}
                    </div>
                  </div>
                  <div className="label-container">
                    <div className="player-label">Country</div>
                    <div className="label-data">
                      {this.state.data[0].country}
                    </div>
                  </div>
                  <div className="label-container">
                    <div className="player-label">Profile</div>
                    <div className="label-data">
                      {this.state.data[0].profile.length === 0
                        ? "Profile data not available"
                        : this.state.data[0].profile}
                    </div>
                  </div>
                  <div className="label-container">
                    <div className="player-label">Playing Role</div>
                    <div className="label-data">
                      {this.state.data[0].playingRole}
                    </div>
                  </div>
                  <div className="label-container">
                    <div className="player-label">Batting Style</div>
                    <div className="label-data">
                      {this.state.data[0].battingStyle}
                    </div>
                  </div>
                  <div className="label-container">
                    <div className="player-label">Bowling Style</div>
                    <div className="label-data">
                      {this.state.data[0].bowlingStyle}
                    </div>
                  </div>
                </div>
                <div className="image-container">
                  <img src={this.state.data[0].imageURL} alt="player's pic" />
                </div>
              </div>
              <div className="statisticsDom">
                <div>{this.generateStatisticDom(this.state.data[0].data)}</div>
              </div>
            </div>
          ) : (
            <div className="no-data">
              Search about Player Statistics and Bio
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PlayerStatsBio;
