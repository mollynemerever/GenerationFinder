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
          <ul className="nobullet">
            <li>
              {" "}
              <strong>Core Values:</strong> Confidence, Civic Duty, Education,
              Diversity{" "}
            </li>{" "}
            <li>
              {" "}
              <strong> Upbringing: </strong>Children of Divorce, Scheduled
              Childhoods, Sheltered Environment
            </li>
            <li>
              {" "}
              <strong>Attributes: </strong>Sociable, Highly Communicative,
              Optimistic, Global Mindset{" "}
            </li>
            <li>
              {" "}
              <strong>Work Ethic: </strong>Ambitous, Multitasking,
              Entrepreneurial
            </li>
            <li>
              {" "}
              <strong>Technology: </strong>A Neccessity, Internet, Camera Phone,
              Email
            </li>
            <li>
              {" "}
              <strong>Celebrities: </strong>Serena Williams, Kristen Bell,
              Justin Timberlake, Prince Harry{" "}
            </li>
          </ul>
          <br />
          <button onClick={e => this.props.updateYear(e, null)}>Back</button>
        </div>
      </div>
    );
  }
}
