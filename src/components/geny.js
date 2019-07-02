import React, { Component } from "react";

export default class GenY extends Component {
  render() {
    return (
      <div>
        Gen Y 1977-1995
        <button onClick={e => this.props.updateYear(e, null)}>back</button>
      </div>
    );
  }
}
