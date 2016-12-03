import React, { Component } from 'react';
import '../css/block.css';

export default class Block extends Component {

  render() {
      return (
        <div style={this.props.style} className={"col s12 m12 l6 block valign-wrapper " + this.props.className} >
          <div className="valign">
            {this.props.children}
          </div>
        </div>
      );
  }
}
