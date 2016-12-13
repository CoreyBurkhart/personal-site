import React from 'react';
import Block from './Block.js';
import ScrollEffects from './scroll-effects';
import '../css/contact-form.css';

const ContactForm = (props) => {
  return (
    <Block fullWidth={true} className='contact-form'>
      <ScrollEffects animate='fadeIn' >
        <h1>Get in Touch</h1>
        <aside className='text-flow'>If this isn't your style, my email is below (smiley)</aside>
        <form method='POST' action='https://formspree.io/hello@coreyburkhart.com'>
          <p className='flow-text'>
            Hi my name is
            <input name='name' label='Name' type='text' placeholder='Name' />
             and I am working on developing
            <input name='project' label='Project' type='text'  placeholder='Project' />.
            Here is my
            <input name='email' label='Email' type='email' placeholder='Email' />
            so you can get in touch with me and start an amazing relationship.
          </p>
            <input type="submit" className="waves-effect waves-light btn" value="Send" />
        </form>
      </ScrollEffects>
    </Block>
  )
}

export default ContactForm;
