import React, { Component } from "react";

export default class GenX extends Component {
  render() {
    return (
      <div className="postboomer">
        <div className="facts">
          <h1>Post Boomers</h1>
          <h2> Generation X</h2>
          <h4> 1965 - 1976</h4>
          <br />
          <br />
          <li>
            {" "}
            <strong>Core Values:</strong> Independent, Pragmatism, Technology
            Literate, Entrepreneurial{" "}
          </li>{" "}
          <br />
          <li>
            {" "}
            <strong> Upbringing: </strong>Political Scandals, USA loosing power,
            Lay Offs, Dual Income Families
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
            <strong>Work Ethic: </strong>Adaptable, Antiestablishment Mentality,
            Results Focused
          </li>
          <br />
          <li>
            {" "}
            <strong>Technology: </strong> Is Familiar, Cell Phone, Pager
          </li>
          <br />
          <li>
            {" "}
            <strong>Celebrities: </strong>Jenifer Aniston, Leonardo DiCaprio,
            Will Smith, Amy Poehler{" "}
          </li>
          <br />
          <button onClick={e => this.props.updateYear(e, null)}>Back</button>
        </div>
      </div>
    );
  }
}
