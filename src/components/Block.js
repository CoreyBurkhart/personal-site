import React, { Component } from 'react';
import { Col } from 'react-materialize';

export default class Block extends Component {

  render() {

    return (
      <Col id={this.props.id} style={this.props.style} s={12} m={12} l={this.props.fullWidth ? 12 : 6} className={'block valign-wrapper ' + this.props.className} >
        <div  className="valign" >
          {this.props.children}
        </div>
      </Col>
    )
  }
}
