import React, { Component } from "react";

export default class Genz extends Component {
  render() {
    return (
      <div>
        {" "}
        Generation Z Class 1996-TBD
        <button onClick={e => this.props.updateYear(e, null)}>back</button>
      </div>
    );
  }
}
