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
            <CollapsibleItem header='Excellent oral and written communication skills' icon='build'>
              Ability to collaborate with team members as well as work independently. Ability to communicate technical ideas to business users and other teams
            </CollapsibleItem>
            <CollapsibleItem header='Always Learning' icon='build'>
              Passionate about user experience, open source work, very comfortable contributing to open source software projects using git and github.
            </CollapsibleItem>
            <CollapsibleItem header='Results-oriented' icon='build'>
              able to work under pressure and deadlines
            </CollapsibleItem>
            <CollapsibleItem header='Problem Solver' icon='build'>
              Excellent problem-solving and analytical skills.
            </CollapsibleItem>
            <CollapsibleItem header='Tell-tale signs of amazing programming' icon='build'>
              Able to sit for days, if not weeks at a time. Copious coffee consumption. 
            </CollapsibleItem>
          </Collapsible>
        </ScrollEffects>
      </Block>
  )
}

export default LearningList;
