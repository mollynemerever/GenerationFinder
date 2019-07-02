import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome.js";
import GenX from "./components/genx.js";
import GenY from "./components/geny.js";
import GenZ from "./components/genz.js";
import Traditionalist from "./components/traditionalist.js";
import BabyBoomer from "./components/babyboomer.js";

export default class App extends Component {
  state = {
    year: null
  };

  updateYear = (e, year) => {
    e.preventDefault();
    console.log(year);
    this.setState({ year: year });
  };

  render() {
    let component;
    if (this.state.year <= 1945 && this.state.year !== null) {
      component = <Traditionalist />;
    } else if (this.state.year > 1945 && this.state.year <= 1964) {
      component = <BabyBoomer />;
    } else if (this.state.year > 1946 && this.state.year <= 1976) {
      component = <GenX />;
    } else if (this.state.year > 1976 && this.state.year <= 1995) {
      component = <GenY />;
    } else if (this.state.year > 1995) {
      component = <GenZ />;
    } else {
      component = <Welcome updateYear={this.updateYear} />;
    }
    return <div>{component}</div>;
  }
}
