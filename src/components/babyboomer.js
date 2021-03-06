import React, { Component } from "react";

export default class BabyBoomer extends Component {
  render() {
    return (
      <div className="boomers">
        <div className="facts">
          <h1>Baby Boomers</h1>
          <h2> "Me" Generation</h2>
          <h4> 1946 - 1964</h4>
          <br />
          <br />
          <ul className="nobullet">
            <li>
              {" "}
              <strong>Core Values:</strong> Anti War, Personal Growth, Spend Now
              - Worry Later, Equal Rights & Opportunity{" "}
            </li>{" "}
            <li>
              {" "}
              <strong> Upbringing: </strong>Idolized "American Dream", Post-War
              Babies, Non-Working Mothers
            </li>
            <li>
              {" "}
              <strong>Attributes: </strong>Strong Work Ethic, Consumerism,
              Political Correctness, Responsible{" "}
            </li>
            <li>
              {" "}
              <strong>Work Ethic: </strong>Loyal, Live to Work, Quality
            </li>
            <li>
              {" "}
              <strong>Technology: </strong>Adapted, Microwave, Touch-Tone
              Phones, Pagers
            </li>
            <li>
              {" "}
              <strong>Celebrities: </strong>Bill Clinton, Meryl Streep, Billy
              Joel, Oprah{" "}
            </li>
          </ul>
          <br />
          <button onClick={e => this.props.updateYear(e, null)}>Back</button>
        </div>
      </div>
    );
  }
}
