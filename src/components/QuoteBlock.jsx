import React, { Component } from 'react';
import Block from './Block.js';
import ScrollEffects from './scroll-effects';
import '../css/quote-block.css';

export default class QuoteBlock extends Component {

  render() {
    // let style;
    // if(this.props.url) {
    //   style = {
    //     backgroundImage: `url(${this.props.url})`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover'
    //   }
    // }
    return (
        <Block fullWidth={true} className={"quote "+ this.props.colorSet} >
          <ScrollEffects animate='fadeIn' >
            <blockquote>{this.props.quote}</blockquote>
            <sub><em>{this.props.cite}</em></sub>
          </ScrollEffects>
        </Block>
    )
  }
}
