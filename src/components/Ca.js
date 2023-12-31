import React, { Component } from "react";

export class Ca extends Component {
  render() {
    let {title,desc,urlToImage}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem", height:"26rem"}} >
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {desc}
            </p>
            <a href="/" className="btn btn-sn btn-primary">
              Visit Us
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Ca;
