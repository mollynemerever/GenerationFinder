import React, { Component } from "react";

export default class GenY extends Component {
  render() {
    return (
      <div className="millenial">
        <div className="facts">
          <h1>Millenial</h1>
          <h2> Generation Y</h2>
          <h4> 1977 - 1995</h4>
          <br />
          <br />
          <li>
            {" "}
            <strong>Core Values:</strong> Confidence, Civic Duty, Education,
            Diversity{" "}
          </li>{" "}
          <br />
          <li>
            {" "}
            <strong> Upbringing: </strong>Children of Divorce, Scheduled
            Childhoods, Sheltered Environment
          </li>
          <br />
          <li>
            {" "}
            <strong>Attributes: </strong>Sociable, Highly Communicative,
            Optimistic, Global Mindset{" "}
          </li>
          <br />
          <li>
            {" "}
            <strong>Work Ethic: </strong>Ambitous, Multitasking, Entrepreneurial
          </li>
          <br />
          <li>
            {" "}
            <strong>Technology: </strong>A Neccessity, Internet, Camera Phone,
            Email
          </li>
          <br />
          <li>
            {" "}
            <strong>Celebrities: </strong>Serena Williams, Kristen Bell, Justin
            Timberlake, Prince Harry{" "}
          </li>
          <br />
          <button onClick={e => this.props.updateYear(e, null)}>Back</button>
        </div>
      </div>
    );
  }
}
