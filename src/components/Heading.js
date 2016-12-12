import React from 'react';
import Block from './Block.js';
import ScrollEffects from './scroll-effects';

const Heading = (props) => {
  return (
    <Block className='heading color1' >
      <ScrollEffects animate='fadeInRight' >
        <heading>
          <super>Hi, I'm Corey</super>
          <aside>The first developer you’ve ever met with amazing communication skills!</aside>
        </heading>
      </ScrollEffects>
    </Block>
  )
}

 export default Heading;
