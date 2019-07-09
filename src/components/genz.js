import React, { Component } from "react";

export default class Genz extends Component {
  render() {
    return (
      <div className="genz">
        <div className="facts">
          <h1>iGen</h1>
          <h2> Generation Z</h2>
          <h4> 1996 - Present</h4>
          <br />
          <br />
          <ul className="nobullet">
            <li>
              {" "}
              <strong>Core Values:</strong> Positive Social Change, Education,
              Diversity and Inclusion{" "}
            </li>{" "}
            <li>
              {" "}
              <strong> Upbringing: </strong>Post 9/11 America,Great Recession,
              Technology Dependent
            </li>
            <li>
              {" "}
              <strong>Attributes: </strong>Pragmatic, Confident, Self-Directed,
              Environmental Advocates{" "}
            </li>
            <li>
              {" "}
              <strong>Work Ethic: </strong>Competitive, Multitasking,
              Independent
            </li>
            <li>
              {" "}
              <strong>Technology: </strong>Habitual, Social Media, Smart Phones,
              Tablets
            </li>
            <li>
              {" "}
              <strong>Celebrities: </strong>Millie Bobby Brown, Noach Centineo,
              Shawn Mendes, Kylie Jenner{" "}
            </li>
          </ul>
          <br />
          <button onClick={e => this.props.updateYear(e, null)}>Back</button>
        </div>
      </div>
    );
  }
}
