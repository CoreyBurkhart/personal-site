import React, { Component } from 'react';
import Block from './Block.js';
import ScrollEffects from './Scroll-effects';

export default class Article extends Component {

  render() {

    return (
      <Block className={this.props.className} fullWidth={true}>
        <ScrollEffects animate='fadeInUp' >
          <article className='fullWidth'>
            <h1>{this.props.title}</h1>
            <p className="flow-text">{this.props.text}</p>
          </article>
        </ScrollEffects>
      </Block>
    )
  }
}
