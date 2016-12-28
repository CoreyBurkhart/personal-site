import React, { Component } from 'react';
import Block from './Block.js';
import ScrollEffects from './Scroll-effects';
import '../css/quote-block.css';

export default class QuoteBlock extends Component {

  render() {
    return (
        <Block fullWidth={true} className={"quote "+ this.props.colorSet} >
          <ScrollEffects animate='fadeIn' >
            <div className='fullWidth'>
              <blockquote>{this.props.quote}</blockquote>
              <sub><em>{this.props.cite}</em></sub>
            </div>
          </ScrollEffects>
        </Block>
    )
  }
}
