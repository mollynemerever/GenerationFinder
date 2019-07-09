import React, { Component } from "react";

export default class Traditionalist extends Component {
  render() {
    return (
      <div className="traditionalist">
        <div className="facts">
          <h1>Traditionalist</h1>
          <h2> "Silent" Generation</h2>
          <h4> 1945 and Earlier</h4>
          <br />
          <br />
          <li>
            {" "}
            <strong>Core Values:</strong> Conformity, Law and Order, Respect for
            Authority, Family Focus{" "}
          </li>{" "}
          <br />
          <li>
            {" "}
            <strong> Upbringing: </strong>The Great Depression, Hard Times
            Followed By Prosperity, Traditional Family Structure
          </li>
          <br />
          <li>
            {" "}
            <strong>Attributes: </strong>Conservative, Fiscally Prudent,
            Patriotic, Ethical{" "}
          </li>
          <br />
          <li>
            {" "}
            <strong>Work Ethic: </strong>Dedicated, Good Attitude,
            Socialization, Fairness
          </li>
          <br />
          <li>
            {" "}
            <strong>Technology: </strong> Hoover Dam, Rotary Phones, Memos
          </li>
          <br />
          <li>
            {" "}
            <strong>Celebrities: </strong>Elizabeth Taylor, Buzz Aldrin, Ray
            Charles, Diana Ross{" "}
          </li>
          <br />
          <button onClick={e => this.props.updateYear(e, null)}>Back</button>
        </div>
      </div>
    );
  }
}
