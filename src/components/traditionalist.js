import React, { Component } from "react";

export default class Traditionalist extends Component {
  render() {
    return (
      <div>
        {" "}
        Traditionalist 1945 and earlier
        <button onClick={e => this.props.updateYear(e, null)}>back</button>
      </div>
    );
  }
}
