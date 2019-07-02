import React, { Component } from "react";

export default class BabyBoomer extends Component {
  render() {
    return (
      <div>
        {" "}
        BabyBoomer 1946- 1964
        <button onClick={e => this.props.updateYear(e, null)}>back</button>
      </div>
    );
  }
}
