import React, { Component } from 'react';
import '../css/app.css';
import Block from './Block.js';
import Article from './Article.jsx';
import { Button,Icon, Row, Col, Collapsible, CollapsibleItem, Input } from 'react-materialize';
import QuoteBlock from './QuoteBlock.jsx';
import me from '../images/me.jpeg';
import forest from '../images/forest.jpg';
import city from '../images/city.jpg';
import mountains from '../images/mountains.jpg';



class App extends Component {
  constructor() {
    super();
    this.state =  {'size': window.innerWidth};
  }

  componentDidMount() {
    window.addEventListener('resize', (e) => {
      this.setState({'size': window.innerWidth});
    })
  }

  imageBlock(url) {
    let style;
    console.log(url);
    if(url) {
      style = {
        backgroundImage: 'url(' + url + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    }
    return (<Block className='image-block' style={style}></Block>)
  }


  render() {

    return (
      <Row >
        {this.imageBlock(me)}
        <Block className='heading color1' >
          <heading>
            <super>Hi, I'm Corey</super>
            <aside>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</aside>
          </heading>
        </Block>

        {/* ROW 2 */}
        <Article title='Looking to transition to React?' text='Want a team member who is as passionate about development as you are about your project or business? I turn dreams to css, idea’s into products, and coffee into code. (Coffee emoji here).' />

        <QuoteBlock quote='"Hands down the best developer I have ever had the pleasure of working with!"' cite='Some Dude' url={mountains} colorSet='quote-color-1' />

          {/* ROW 3*/}
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

        <QuoteBlock quote='"Hands down the best developer I have ever had the pleasure of working with!"' cite='Some Dude' url={city} colorSet='quote-color-2' />




        <Article title='Need a developer who lives and breathes standards and best practices?' text='  I understand what it means to work on a team and offer excellent communication to make projects as clear-cut and stress free as possible. I am someone who keeps thinking about the project even after work, and especially when I am working with a good team. I love science and nature.' />

        <QuoteBlock quote='"Hands down the best developer I have ever had the pleasure of working with!"' cite='Some Dude' url={forest} colorSet='quote-color-1' />

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
      </Row>
    );
  }
}

export default App;
