import React, { Component } from 'react';
import '../css/app.css';
import Block from './Block.js';
import img from '../images/7os_26cb1wo-griffin-keller.jpg';

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

  render() {
    let order;
    if(this.state.size > 990) {
      order = {
        push: 'push-l6',
        pull: 'pull-l6'
      }
    } else {
      order = {
        push: '',
        pull: ''
      };
    }

    return (
      <div className="row container">

        {/* ROW 1 */}
          <Block className='image-block'>
          </Block>
          <Block className='heading color-set-2'>
          <heading>
          <span><super>Hi, I'm Corey</super></span>
          <aside>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</aside>
          </heading>
          </Block>

          {/* ROW 2 */}
          <Block className={order['push']}>
            <article>
              <h1>Looking to transition to React?</h1>
              <p className="flow-text">  Want a team member who is as passionate about development as you are about your project or business? I turn dreams to css, idea’s into products, and coffee into code. (Coffee emoji here). </p>
            </article>
          </Block>
          <Block className={"quote color-set-1 " + order.pull}>
          <blockquote>"Hands down the best developer I have ever had the pleasure of working with!"</blockquote>
          <sub><em>- Some Dude</em></sub>
          </Block>

          {/* ROW 3*/}
          <Block className={"skills left " }>
            <h1>I do:</h1>
            <ul>
              <li><i className='fa fa-check'></i><span>HTML5 &amp; CSS3</span></li>
              <li><i className='fa fa-check'></i><span>Javascript</span></li>
              <li><i className='fa fa-check'></i><span>React</span></li>
              <li><i className='fa fa-check'></i><span>Foundation 6, bootstrap 3, materialize</span></li>
              <li><i className='fa fa-check'></i><span>Unit Testing</span></li>
            </ul>
          </Block>
          <Block className="quote color-set-2" >
          <blockquote>"Hands down the best developer I have ever had the pleasure of working with!"</blockquote>
          <sub><em>- Some Dude</em></sub>
          </Block>

          {/* ROW 4 */}
          <Block className={order['push']}>
          <article>
          <h1>Need a developer who lives and breathes standards and best practices?</h1>
          <p className="flow-text">  I understand what it means to work on a team and offer excellent communication to make projects as clear-cut and stress free as possible. I am someone who keeps thinking about the project even after work, and especially when I am working with a good team. I love science and nature.</p>
          </article>
          </Block>
          <Block className={"quote color-set-1 " + order.pull}>
          <blockquote>"Hands down the best developer I have ever had the pleasure of working with!"</blockquote>
          <sub><em>- Some Dude</em></sub>
          </Block>

          {/* ROW 5 */}
          <Block className="skills left">
            <h1>What I'm learning</h1>
            <ul>
              <li><i className="fa fa-flask" aria-hidden="true"></i><span>Node &amp; Express</span></li>
              <li><i className="fa fa-flask" aria-hidden="true"></i><span>Relational Databases</span></li>
              <li><i className="fa fa-flask" aria-hidden="true"></i><span>Restful API design</span></li>
              <li><i className="fa fa-flask" aria-hidden="true"></i><span>Authorization &amp; authentication</span></li>
              <li><i className="fa fa-flask" aria-hidden="true"></i><span>Security (OAUTH2 and Web Token)</span></li>
            </ul>
          </Block>

          <Block className={"quote color-set-2 "}>
          <blockquote>"Hands down the best developer I have ever had the pleasure of working with!"</blockquote>
          <sub><em>- Some Dude</em></sub>
          </Block>

          {/* ROW 6 */}
          <Block className={'contact-ul left ' + order['push']}>
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
            <div className={"col s12 m12 l6 block color-set-1 valign-wrapper " + order.pull}>
              <div className='valign row'>
                <a href="https://github.com/CoreyBurkhart" alt="Corey's Github" target="_blank" title="Corey's Github profile"className="links col s4" >
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/corey-burkhart-4859a6123?trk=nav_responsive_tab_profile_pic" alt="Corey Burkhart's LinkedIn profile" target="_blank" title="Corey's LinkedIn profile" className="links col s4" >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="http://codepen.io/coreyburk/" target="_blank" title="View my work on Codepen" alt="Corey Burkhart's Codepen profile" className="links col s4" >
                  <i className="fa fa-codepen"></i>
                </a>
              </div>
            </div>
      </div>
    );
  }
}

export default App;
