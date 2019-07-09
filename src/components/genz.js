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
          <li>
            {" "}
            <strong>Core Values:</strong> Positive Social Change, Education,
            Diversity and Inclusion{" "}
          </li>{" "}
          <br />
          <li>
            {" "}
            <strong> Upbringing: </strong>Post 9/11 America,Great Recession,
            Technology Dependent
          </li>
          <br />
          <li>
            {" "}
            <strong>Attributes: </strong>Pragmatic, Confident, Self-Directed,
            Environmental Advocates{" "}
          </li>
          <br />
          <li>
            {" "}
            <strong>Work Ethic: </strong>Competitive, Multitasking, Independent
          </li>
          <br />
          <li>
            {" "}
            <strong>Technology: </strong>Habitual, Social Media, Smart Phones,
            Tablets
          </li>
          <br />
          <li>
            {" "}
            <strong>Celebrities: </strong>Millie Bobby Brown, Noach Centineo,
            Shawn Mendes, Kylie Jenner{" "}
          </li>
          <br />
          <button onClick={e => this.props.updateYear(e, null)}>Back</button>
        </div>
      </div>
    );
  }
}
