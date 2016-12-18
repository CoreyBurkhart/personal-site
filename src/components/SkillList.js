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
            <h1>Dev Ninja Skills</h1>
          </Row>
          {/* <Row>
            <aside className='text-flow'>I tak</aside>
          </Row> */}
          <Collapsible popout  accordion >
            <CollapsibleItem header='HTML5, CSS3, SASS' icon='done'>
              I build semantic HTML templates and build quickly using frameworks including Bootstrap and Materialize.
            </CollapsibleItem>
            <CollapsibleItem header='Javascript(ES6)' icon='done'>
              Making clean, readable, and maintainable code is my goal. Javascript, its quirks and functional programming, makes building easy and I love it.
            </CollapsibleItem>
            <CollapsibleItem header='React.js with Flux/Redux' icon='done'>
            I have experience using React and Flux-based libraries to build reliable and maintainable single page apps. As well as experience with accompanying tools like Babel, Node.js, and Webpack.
            </CollapsibleItem>
            <CollapsibleItem header='AJAX and Asynchronous coding' icon='done'>
              I understand the importance of performant asynchronous code.
            </CollapsibleItem>
            <CollapsibleItem header='Automated Testing' icon='done'>
              I have experience testing with React and Jest, as well as other browser tools for quick and efficient bug squashing.
            </CollapsibleItem>
          </Collapsible>
        </ScrollEffects>
      </Block>
  )
}

export default SkillsList;
