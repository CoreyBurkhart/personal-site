import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import '../css/block.css';

export default class Block extends Component {

  render() {
      return (
        <Col s={12} m={12} l={6} className={'block valign-wrapper ' + this.props.className} >
          <div style={this.props.style} className="valign">
            {this.props.children}
          </div>
        </Col>
      );
  }
}
