import React, { Component } from 'react';
import '../css/app.css';
import { Row } from 'react-materialize';
//MY COMPONENTS
import Article from './Article.jsx';
import QuoteBlock from './QuoteBlock.jsx';
import ContactForm from './ContactForm.js';
import ContactInfo from './ContactInfo.js';
import Heading from './Heading.js';
import ImageBlock from './ImageBlock.js';
import LearningList from './LearningList.js';
import SkillsList from './SkillList.js';
import SocialIcons from './SocialIcons.js';
//IMAGES
import me from '../images/me.jpeg';
import forest from '../images/forest.jpg';
import city from '../images/city.jpg';
import mountains from '../images/mountains.jpg';

class App extends Component {

  render() {
    return (
      <Row>
        <ImageBlock id='me' url={me} />
        <Heading />
        <Article title='Need a developer as passionate as you are? Look no further.' text='Whether you love React, want to make a quick marketing site, 	or just need helping hand, I’m your man. I am driven to build fast, reliable and responsive, websites and web applications using the latest standards and best practices. High quality work and great communication are what I offer and aim for 100% satisfaction with every client. TLDR: I turn dreams to css, idea’s into products, and coffee into code. ' />
        <QuoteBlock quote='"Hands down the best developer I have ever had the pleasure of working with!"' cite='Some Dude' url={mountains} colorSet='quote-color-1' />
        <SkillsList />
        <LearningList />
        <QuoteBlock quote='"Hands down the best developer I have ever had the pleasure of working with!"' cite='Some Dude' url={city} colorSet='quote-color-2' />
        <Article title='Need a developer who lives and breathes standards and best practices?' text='  I understand what it means to work on a team and offer excellent communication to make projects as clear-cut and stress free as possible. I am someone who keeps thinking about the project even after work, and especially when I am working with a good team. I love science and nature.' />
        <QuoteBlock quote='"Hands down the best developer I have ever had the pleasure of working with!"' cite='Some Dude' url={forest} colorSet='quote-color-1' />
        <ContactForm />
        <SocialIcons />
        <ContactInfo />
      </Row>
    )
  }
}

export default App;
