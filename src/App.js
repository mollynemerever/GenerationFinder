import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome.js";
import GenX from "./components/genx.js";
import GenY from "./components/geny.js";
import GenZ from "./components/genz.js";
import Traditionalist from "./components/traditionalist.js";

export default class App extends Component {
  state = {
    year: ""
  };

  updateYear = (e, year) => {
    e.preventDefault();
    console.log(year);
    this.setState({ year: year });
  };

  render() {
    return (
      <div>
        <Welcome updateYear={this.updateYear} />
      </div>
    );
  }
}
