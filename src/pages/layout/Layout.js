import React from 'react';
import Block from '../../util-components/Block.js';
import "../../css/index.css";
import ScrollEffects from 'react-scroll-effects';
import { Link } from 'react-router';
import me from '../../images/me.jpg';
import scrollIntoView from 'scroll-into-view';



export default class Layout extends React.Component {

  componentWillMount() {
    this.routeHandler();
    window.addEventListener('hashchange', this.routeHandler.bind(this))
  }

  componentWillUnMount() {
    window.removeEventListener('hashchange', this.routeHandler)
  }

  scrollToContact(e) {
    let c = document.getElementById('contact');
    scrollIntoView(c);
  }

  routeHandler(e) {
    let link;
    const page = this.props.children.type.name;

    if(page === 'Portfolio') {
      link =  <Link to='/' className="links" >
                <i className="fa fa-arrow-left" title="Take me back"></i>
              </Link>
      this.setState({navCx: 'active'});
    } else {
      link =  <Link to='portfolio' className="links" >
                <i className="fa fa-list-alt" title="View my portfolio"></i>
              </Link>
      this.setState({navCx: ' '});
    }
    this.setState({link: link});
  }

  render() {
    return (
      <div id="layout-container">
         {/* <div id="faded-layer"><div id="faded-corner"></div></div>  fade out everything but contact block???? */}
        <header id="nav-container" >
          <nav id="main-nav">
            <Link to="/">
              <h1>Corey Burkhart</h1>
            </Link>
            <ul>
              <li>
                <Link className={this.state.navCx} to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <span onClick={this.scrollToContact}>Contact</span>
              </li>
            </ul>
          </nav>
        </header>
        <ImageBlock id='me' className="resize for-nav" url={me} />
          {this.props.children}
        <Footer link={this.state.link}/>
      </div>
    )
  }
}

const Footer = (props) => {


  return (
    <footer>
      <Block id="contact" className='contact-ul colored resize' >
        <ScrollEffects animate='fadeIn'>
          <section className="">
            <h1 className="contrast-header">Get in Touch</h1>
              <address>
                <ul >
                  <li id="email">
                    {/* <i className="contact-icon fa fa-envelope" ></i> */}
                    <a href="mailto:hello@coreyburkhart.com">hello@coreyburkhart.com</a>
                  </li>
                  <li>
                    {/* <i className="contact-icon fa fa-map-marker" ></i> */}
                    <a id="location" href="https://www.google.com/maps/place/San+Diego,+CA/@32.8242404,-117.3753439,10z/data=!3m1!4b1!4m5!3m4!1s0x80d9530fad921e4b:0xd3a21fdfd15df79!8m2!3d32.715738!4d-117.1610838" target='_blank'>
                      San Diego, California
                    </a>
                  </li>
                </ul>
              </address>
            </section>
          </ScrollEffects>
        </Block>
        <Block className="colored resize social" >
          <ScrollEffects animate='fadeIn' >
            <div className="social-container">
              <a href="https://github.com/CoreyBurkhart" alt="Corey's Github" target="_blank" title="Github" className="links" >
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/corey-burkhart-4859a6123?trk=nav_responsive_tab_profile_pic" alt="Corey Burkhart's LinkedIn" target="_blank" title="LinkedIn" className="links" >
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="http://codepen.io/coreyburk/" alt="Corey's Codepen" target="_blank" title="Codepen" className="links" >
                <i className="fa fa-codepen"></i>
              </a>
              {props.link}
            </div>
          </ScrollEffects>
        </Block>
    </footer>
  )
}


const ImageBlock = (props) => {
  let style;
  if(props.url) {
    style = {
      backgroundImage: 'url(' + props.url + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  }
  return (<Block id={props.id} className={`image-block ${props.className}`} style={style}></Block>)
}
