import React from 'react';
import Block from './Block.js';
import ScrollEffects from './scroll-effects';

const SocialIcons = (props) => {

  return (
    <Block className="center-align color2" >
      <ScrollEffects animate='fadeIn' offset='-100' >
        <a href="https://github.com/CoreyBurkhart" alt="Corey's Github" target="_blank" title="Corey's Github profile" className="links col s4" >
          <i className="fa fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/corey-burkhart-4859a6123?trk=nav_responsive_tab_profile_pic" alt="Corey Burkhart's LinkedIn profile" target="_blank" title="Corey's LinkedIn profile" className="links col s4" >
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="http://codepen.io/coreyburk/" target="_blank" title="View my work on Codepen" alt="Corey Burkhart's Codepen profile" className="links col s4" >
          <i className="fa fa-codepen"></i>
        </a>
      </ScrollEffects>
    </Block>
  )
}

export default SocialIcons;
