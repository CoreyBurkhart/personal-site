import React from 'react';
import Block from './Block.js';
import ScrollEffects from './scroll-effects';
import { Row, Collapsible, CollapsibleItem } from 'react-materialize';

const LearningList = (props) => {

  return (
      <Block className="skills">
        <ScrollEffects animate='fadeInRight'>
          <Row>
            <h1>I'm always learning</h1>
          </Row>
          <Row>
            <aside className='text-flow'>Here are some things I strive to improve at every day.</aside>
          </Row>
          <Collapsible popout accordion >
            <CollapsibleItem header='Node &amp; Express' icon='build'>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CollapsibleItem>
            <CollapsibleItem header='Relational Databases' icon='build'>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CollapsibleItem>
            <CollapsibleItem header='Restful API design' icon='build'>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CollapsibleItem>
            <CollapsibleItem header='Authorization &amp; authentication' icon='build'>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CollapsibleItem>
            <CollapsibleItem header='Security' icon='build'>
            (OAUTH2 and Web Token)
            </CollapsibleItem>
          </Collapsible>
        </ScrollEffects>
      </Block>
  )
}

export default LearningList;
