import React from 'react';
import Block from './Block.js';
import ScrollEffects from './scroll-effects';
import { Row, Collapsible, CollapsibleItem } from 'react-materialize';

const SkillsList = (props) => {
  return (
      <Block className="skills" >
        <ScrollEffects animate='fadeInLeft'>
          <Row>
            <h1>I'm great at these</h1>
          </Row>
          <Row>
            <aside className='text-flow'>Test me out! GIVE ME A JOB!</aside>
          </Row>
          <Collapsible popout  >
            <CollapsibleItem header='HTML5 &amp; CSS3' icon='done'>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CollapsibleItem>
            <CollapsibleItem header='Javascript' icon='done'>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CollapsibleItem>
            <CollapsibleItem header='React' icon='done'>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CollapsibleItem>
            <CollapsibleItem header='Foundation 6, Bootstrap 3, Materialize' icon='done'>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CollapsibleItem>
            <CollapsibleItem header='Unit Testing' icon='done'>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CollapsibleItem>
          </Collapsible>
        </ScrollEffects>
      </Block>
  )
}

export default SkillsList;
