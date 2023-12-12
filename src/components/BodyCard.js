import React, { Component } from "react";
import Ca from "./Ca";

export class BodyCard extends Component {
  render() {
    return (
      <div className="container my-5">
        <h2>Wedding Places</h2>
        <div className="row">
          <div className="col-md-4 ">
            <Ca title="myTitle" desc="des0ac" />
          </div>
          <div className="col-md-4">
            <Ca title="myTitle" desc="des0ac" />
          </div>
          <div className="col-md-4">
            <Ca title="myTitle" desc="des0ac" />
          </div>
        </div>
      </div>
    );
  }
}

export default BodyCard;
