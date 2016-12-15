import React from 'react';
import Block from './Block.js';
import ScrollEffects from './scroll-effects';
import { Row, Collapsible, CollapsibleItem } from 'react-materialize';
import '../css/skill-learning-lists.css';

const LearningList = (props) => {

  return (
      <Block className="skills">
        <ScrollEffects animate='fadeInRight'>
          <Row>
            <h1>Noteworthy strengths</h1>
          </Row>
          {/* <Row>
            <aside className='text-flow'>Here are some things I strive to improve at every day.</aside>
          </Row> */}
          <Collapsible popout accordion >
            <CollapsibleItem header='Strong orgainization' icon='build'>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CollapsibleItem>
            <CollapsibleItem header='Always Learning' icon='build'>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CollapsibleItem>
            <CollapsibleItem header='Great communication' icon='build'>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CollapsibleItem>
            <CollapsibleItem header='Team player' icon='build'>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CollapsibleItem>
            <CollapsibleItem header='Problem Solver' icon='build'>
            (OAUTH2 and Web Token)
            </CollapsibleItem>
          </Collapsible>
        </ScrollEffects>
      </Block>
  )
}

export default LearningList;
