import React, { Component } from 'react';
import { Col } from 'react-materialize';

export default class Block extends Component {

  render() {
    let {id, style, fullWidth, className, children} = this.props;
    fullWidth = fullWidth ? 12 : 6;

    return (
      <Col id={id} style={style} s={12} m={12} l={fullWidth} className={'block valign-wrapper ' + className} >
        <Col className="valign" >
          {children}
        </Col>
      </Col>
    )
  }
}
