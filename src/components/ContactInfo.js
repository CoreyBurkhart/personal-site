import React from 'react';
import Block from './Block.js';
import ScrollEffects from './scroll-effects';

const ContactInfo = (props) => {
  return (
    <Block className='contact-ul left color1' >
      <ScrollEffects animate='fadeIn' offset='-100' >
        <section>
          <h1>Get in Touch</h1>
            <address>
              <ul >
                <li>
                  <i className="contact-icon fa fa-envelope" ></i>
                  <a href="mailto:hello@coreyburkhart.com">hello@coreyburkhart.com</a>
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
        </ScrollEffects>
      </Block>
  )
}

export default ContactInfo;
