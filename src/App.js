import React, { Component } from "react";
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

  componentDidMount = () => {
    if (localStorage.getItem("year") !== null) {
      this.setState({ year: localStorage.getItem("year") });
    } else {
      localStorage.clear();
    }
  };

  updateYear = (e, year) => {
    e.preventDefault();
    this.setState({ year: year });
    localStorage.setItem("year", year);
  };

  render() {
    let component;
    if (this.state.year <= 1945 && this.state.year !== null) {
      component = <Traditionalist updateYear={this.updateYear} />;
    } else if (this.state.year > 1945 && this.state.year <= 1964) {
      component = <BabyBoomer updateYear={this.updateYear} />;
    } else if (this.state.year > 1946 && this.state.year <= 1976) {
      component = <GenX updateYear={this.updateYear} />;
    } else if (this.state.year > 1976 && this.state.year <= 1995) {
      component = <GenY updateYear={this.updateYear} />;
    } else if (this.state.year > 1995) {
      component = <GenZ updateYear={this.updateYear} />;
    } else {
      component = <Welcome updateYear={this.updateYear} />;
    }
    return <div className="App">{component}</div>;
  }
}
