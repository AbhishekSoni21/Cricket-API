import React, { Component } from "react";

class DetailReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }

  copy = value => {
    navigator.clipboard.writeText(value);
    this.setState({
      copied: true
    });
    setTimeout(() => {
      this.setState(() => ({ copied: false }));
    }, 2000);
  };
  render() {
    return (
      <div className="player-data-container" key={this.props.index}>
        <div className="pid">
          <div className="textPid" refs={"pid"}>
            {this.props.player.pid}
          </div>
        </div>
        <div className="fullName">
          <div className="textfullName">{this.props.player.fullName}</div>
          <button
            className="copy"
            onClick={() => this.copy(this.props.player.pid)}
          >
            copy
          </button>
          {this.state.copied ? (
            <div className="copy-message">Player id copied</div>
          ) : (
            <div className="copy-nomessage" />
          )}
        </div>
      </div>
    );
  }
}

export default DetailReport;
