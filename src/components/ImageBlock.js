import React from 'react';
import Block from './Block.js';

const ImageBlock = (props) => {
  let style;
  if(props.url) {
    style = {
      backgroundImage: 'url(' + props.url + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  }
  return (<Block id={props.id} className={`image-block ${props.className}`} style={style}></Block>)
}

export default ImageBlock;
