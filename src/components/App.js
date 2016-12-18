import React, { Component } from 'react';
import '../css/app.css';
import { Row } from 'react-materialize';
//MY COMPONENTS
import Article from './Article.jsx';
import QuoteBlock from './QuoteBlock.jsx';
// import ContactForm from './ContactForm.js';
import ContactInfo from './ContactInfo.js';
import Heading from './Heading.js';
import ImageBlock from './ImageBlock.js';
import LearningList from './LearningList.js';
import SkillsList from './SkillList.js';
import SocialIcons from './SocialIcons.js';
//IMAGES
import me from '../images/me.jpeg';

class App extends Component {

  render() {
    return (
      <Row>
        <ImageBlock id='me' url={me} />
        <Heading />
        <Article title='I’m here to help' text=' I want to make development as painless as possible, not only by getting the job done, but making sure it exceeds expectations for being done RIGHT. I use React, Flux and other current web technologies to build reliable, maintainable, and performant web content. Take advantage of a developer that will not go rogue on you. ' />
        <QuoteBlock quote='&quot; Great front-end developer who is always educating himself. Finally, a developer with communication skills!&quot;' cite='David Pomfret - CEO at RedBlue' colorSet='quote-color-1' />
        <SkillsList />
        <LearningList />
        <QuoteBlock quote="&quot;I have not failed. I've just found 10,000 ways that won't work&quot;" cite='Thomas A. Edison' colorSet='quote-color-2' />
        <Article title='The bottom line' text=" It's simple, I’m a developer with empathy. I have the expertise to get the job done and the interpersonal skills to communicate in order to get it done right." />
        <SocialIcons />
        <ContactInfo />
      </Row>
    )
  }
}

export default App;
