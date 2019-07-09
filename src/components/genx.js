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
          <ul className="nobullet">
            <li>
              {" "}
              <strong>Core Values:</strong> Independent, Pragmatism, Technology
              Literate, Entrepreneurial{" "}
            </li>{" "}
            <li>
              {" "}
              <strong> Upbringing: </strong>Political Scandals, USA loosing
              power, Lay Offs, Dual Income Families
            </li>
            <li>
              {" "}
              <strong>Attributes: </strong>Sociable, Highly Communicative,
              Optimistic, Global Mindset{" "}
            </li>
            <li>
              {" "}
              <strong>Work Ethic: </strong>Adaptable, Antiestablishment
              Mentality, Results Focused
            </li>
            <li>
              {" "}
              <strong>Technology: </strong>Familiar, Cell Phone, Pager
            </li>
            <li>
              {" "}
              <strong>Celebrities: </strong>Jenifer Aniston, Leonardo DiCaprio,
              Will Smith, Amy Poehler{" "}
            </li>
          </ul>
          <br />
          <button onClick={e => this.props.updateYear(e, null)}>Back</button>
        </div>
      </div>
    );
  }
}
