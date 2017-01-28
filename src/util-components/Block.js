import React, { Component } from 'react';

export default class Block extends Component {

  render() {
    let { children, id, className, style } = this.props;

    return (
      <div id={id} className={"generic-block " + className} style={style}>
        <div className="generic-valign-div">
        {children}
        </div>
      </div>
    )
  }
}
