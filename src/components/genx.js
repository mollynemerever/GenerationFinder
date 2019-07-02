import React, { Component } from "react";

export default class GenX extends Component {
  render() {
    return (
      <div>
        {" "}
        Gen X 1965-1976
        <button onClick={e => this.props.updateYear(e, null)}>back</button>
      </div>
    );
  }
}
