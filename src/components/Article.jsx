import React, { Component } from 'react';
import Block from './Block.js';
import '../css/article.css';

export default class Article extends Component {

  render() {

    return (
      <Block className={this.props.className} fullWidth={true}>
        <article >
          <h1>{this.props.title}</h1>
          <p className="flow-text">{this.props.text}</p>
        </article>
      </Block>
    )
  }
}
