import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Card extends Component {
  render() {
    return (
      <div className="col-lg-3">
        <div className="bs-component">
          <div className="card mb-3">
            <h3 className="card-header">{this.props.header}</h3>
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
            </div>
            <img className="avatar" src={this.props.src} alt={this.props.title} />
            <div className="card-body">
              <p className="card-text">{this.props.text}</p>
            </div>
            <div className="card-body">
            { 
            !this.props.readmore ? <Link classNameName="btn btn-primary" to={`/starwar/${this.props.header}`}>Read More</Link> : ''
          }
            </div>
          </div>

        </div>
      </div>
    );
  }
}
