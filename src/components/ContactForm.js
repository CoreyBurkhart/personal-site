import React from 'react';
import Block from './Block.js';
import ScrollEffects from './scroll-effects';
import { Button,Icon, Row, Col } from 'react-materialize';

const ContactForm = (props) => {
  return (
    <Block fullWidth={true} className='contact-form'>
      <ScrollEffects animate='fadeIn' >
        <h1>Get in Touch</h1>
        <aside className='text-flow'>If this isn't your style, my email is below (smiley)</aside>
        <form>
          <p className='flow-text'>
            Hi my name is
            <input label='Name' type='text' placeholder='Name' />
             and I am working on developing
            <input label='Project' type='text'  placeholder='Project' />.
            Here is my
            <input label='Email' type='email' placeholder='Email' />
            so you can get in touch with me and start an amazing relationship.
          </p>
        </form>
        <Col s={4} m={3} l={3} offset='s8 m9 l9' >
          <Button action='submit' waves='light' title='submit form'><Icon left >send</Icon>Send</Button>
        </Col>
      </ScrollEffects>
    </Block>
  )
}

export default ContactForm;
