import React from 'react';
import Block from './Block.js';
import ScrollEffects from './scroll-effects';
import { Row, Collapsible, CollapsibleItem } from 'react-materialize';
import '../css/skill-learning-lists.css';

const SkillsList = (props) => {
  return (
      <Block className="skills" >
        <ScrollEffects animate='fadeInLeft'>
          <Row>
            <h1>What i can help with</h1>
          </Row>
          <Row>
            <aside className='text-flow'>These are the big ones at least</aside>
          </Row>
          <Collapsible popout  accordion >
            <CollapsibleItem header='HTML5, CSS3, SASS' icon='done'>
              Clean, maintainable, and SEO friendly. As essential as it is important. (cite to upwork test score it good?)
            </CollapsibleItem>
            <CollapsibleItem header='Javascript' icon='done'>
              Quirky but awesome. I write in ES6 but understand older javascript as well as jQuery.
            </CollapsibleItem>
            <CollapsibleItem header='React' icon='done'>
              I love and specialize in react, offering great performance, modularity and reliability.
            </CollapsibleItem>
            <CollapsibleItem header='Foundation 6, Bootstrap 3, Materialize' icon='done'>
              This page uses Materialize, but have projects utilizing Foundation and Bootstrap. I enjoy learning any tool that can make development faster and painless.
            </CollapsibleItem>
            <CollapsibleItem header='Unit Testing' icon='done'>
              Where there is javascript, there should be testing. I use Jest.
            </CollapsibleItem>
          </Collapsible>
        </ScrollEffects>
      </Block>
  )
}

export default SkillsList;
