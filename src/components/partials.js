import React from 'react';
import Block from './Block.js';
import { Button,Icon, Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';


const ImageBlock = (props) => {
  let style;
  if(props.url) {
    style = {
      backgroundImage: 'url(' + props.url + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  }
  return (<Block id={props.id} className='image-block' style={style}></Block>)
}

const Heading = (props) => {
  return (
    <Block className='heading color1' >
      <heading>
        <super>Hi, I'm Corey</super>
        <aside>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</aside>
      </heading>
    </Block>
  )
}

const SkillsList = (props) => {
  return (
    <Block className="skills" >
      <Row>
        <h1>I'm great at these</h1>
      </Row>
      <Row>
        <aside className='text-flow'>Test me out! GIVE ME A JOB!</aside>
      </Row>
    <Collapsible popout  >
      <CollapsibleItem className='good-items i1' header='HTML5 &amp; CSS3' icon='done'>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </CollapsibleItem>
      <CollapsibleItem className='good-items i2' header='Javascript' icon='done'>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </CollapsibleItem>
      <CollapsibleItem className='good-items i3' header='React' icon='done'>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </CollapsibleItem>
      <CollapsibleItem className='good-items i4' header='Foundation 6, Bootstrap 3, Materialize' icon='done'>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </CollapsibleItem>
      <CollapsibleItem className='good-items i5' header='Unit Testing' icon='done'>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </CollapsibleItem>
    </Collapsible>
    </Block>
  )
}

const LearningList = () => {
  return (
    <Block className="skills">
      <Row>
        <h1>I'm always learning</h1>
      </Row>
      <Row>
        <aside className='text-flow'>I would especially love to learn more by working with any of these</aside>
      </Row>
      <Collapsible popout >
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
    </Block>
  )
}

const ContactForm = (props) => {
  return (
    <Block fullWidth={true} className='contact-form'>
      <h1>Get in Touch</h1>
      <aside className='text-flow'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed.</aside>
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
    </Block>
  )
}

const ContactInfo = (props) => {
  return (
    <Block className='contact-ul left color1' >
      <section>
        <h1>Get in Touch</h1>
          <address>
            <ul >
              <li>
                <i className="contact-icon fa fa-envelope" ></i>
                <a href="mailto:hello@coreyburkhart.com">hello@coreyburkhart.com</a>
              </li>
              <li>
                <i className="contact-icon fa fa-phone" ></i>
                <a href="tel:+1-619-922-0465">
                  +1 (619) 922-0465
                </a>
              </li>
              <li>
                <i className="contact-icon fa fa-map-marker" ></i>
                <a href="https://www.google.com/maps/place/San+Diego,+CA/@32.8242404,-117.3753439,10z/data=!3m1!4b1!4m5!3m4!1s0x80d9530fad921e4b:0xd3a21fdfd15df79!8m2!3d32.715738!4d-117.1610838" target='_blank'>
                  San Diego, California
                </a>
              </li>
            </ul>
          </address>
        </section>
      </Block>
  )
}

const Social = (props) => {
  return (
    <Block className="center-align color2" >
      <a href="https://github.com/CoreyBurkhart" alt="Corey's Github" target="_blank" title="Corey's Github profile" className="links col s4" >
        <i className="fa fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/corey-burkhart-4859a6123?trk=nav_responsive_tab_profile_pic" alt="Corey Burkhart's LinkedIn profile" target="_blank" title="Corey's LinkedIn profile" className="links col s4" >
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="http://codepen.io/coreyburk/" target="_blank" title="View my work on Codepen" alt="Corey Burkhart's Codepen profile" className="links col s4" >
        <i className="fa fa-codepen"></i>
      </a>
    </Block>
  )
}

export {
  Social,
  ImageBlock,
  Heading,
  SkillsList,
  LearningList,
  ContactForm,
  ContactInfo
}
