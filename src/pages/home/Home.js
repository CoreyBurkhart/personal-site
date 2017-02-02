import React, { Component } from 'react';
import ScrollEffects from "../../util-components/ScrollEffects.js";
import Block from "../../util-components/Block.js";

class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div >
        <Heading />
        <Article title='I’m here to help' text=' I want to make development as painless as possible, not only by getting the job done, but making sure it exceeds expectations for being done RIGHT. I use React, Flux and other current web technologies to build reliable, maintainable, and performant web content. Take advantage of a developer that will not go rogue on you. ' />
        <QuoteBlock quote='&quot; Great front-end developer who is always educating himself. Finally, a developer with communication skills!&quot;' cite='David Pomfret - CEO at RedBlue' />
        <SkillsList/>
        <LearningList/>
        <QuoteBlock quote="&quot;I have not failed. I've just found 10,000 ways that won't work&quot;" cite='Thomas A. Edison' />
        <Article cx="bottom-article" title='The bottom line' text=" It's simple, I’m a developer with empathy. I have the expertise to get the job done and the interpersonal skills to communicate in order to get it done right." />
      </div>
    )
  }
}

const expandItem = (e) => {
  const cx = e.target.parentElement.classList;
  cx.toggle('active');
}

const expandOnScroll = (e) => {
  //get the elements location
  console.log("scroll");
  //compare to trigger locations
}


const Article = (props) => {
  return (
    <Block className={"contrast-block " + props.cx} fullWidth={true}>
      <ScrollEffects animate='fadeInUp' >
        <article className='fullWidth'>
          <h1>{props.title}</h1>
          <p className="article-text">{props.text}</p>
        </article>
      </ScrollEffects>
    </Block>
  )
}

const Heading = (props) => {
  return (
    <Block className='heading heading-block for-nav colored resize' >
      <ScrollEffects animate='fadeInRight' >
        <heading>
          <sup className="contrast-header">Hi, I'm Corey</sup>
          <aside className="heading">The first developer you’ve ever met with amazing communication skills!</aside>
        </heading>
      </ScrollEffects>
    </Block>
  )
}

const LearningList = (props) => {

  return (
      <Block className="contrast-block resize">
        <ScrollEffects animate='fadeInRight'>
          <h1 className="heading">Noteworthy strengths</h1>
          <ul className="list">
            <li onClick={expandItem} onScroll={expandOnScroll}>
              <h3  >Excellent Communication</h3>
              <p > Ability to collaborate with team members as well as work independently. Ability to communicate technical ideas to business users and other teams.</p>
            </li>
            <li onClick={expandItem}>
              <h3  >Always Learning</h3>
              <p > Passionate about user experience, open source work, and very comfortable contributing to open source software projects using git and github.</p>
            </li>
            <li onClick={expandItem}>
              <h3  >Results-oriented</h3>
              <p > Able to work under pressure and deadlines.</p>
            </li>
            <li onClick={expandItem}>
              <h3  >Problem Solver</h3>
              <p > Excellent problem-solving and analytical skills.</p>
            </li>
            <li onClick={expandItem}>
              <h3  >Extras</h3>
              <p > Able to sit for days, if not weeks at a time. Copious coffee consumption.</p>
            </li>
          </ul>
        </ScrollEffects>
      </Block>
  )
}

const SkillsList = (props) => {
  return (
      <Block className="contrast-block resize" >
        <ScrollEffects animate='fadeInLeft'>
            <h1 className="heading">Dev Ninja Skills</h1>
            <ul className="list">
              <li onClick={expandItem}>
                <h3 >HTML5, CSS3, SASS</h3>
                <p >Build semantic HTML templates and build quickly using frameworks including Bootstrap and Materialize.</p>
              </li>
              <li onClick={expandItem}>
                <h3 >Javascript(ES6)</h3>
                <p > Making clean, readable, and maintainable code is my goal. Javascript, its quirks and functional programming, makes building easy and I love it.</p>
              </li>
              <li onClick={expandItem}>
                <h3 >React.js, Flux</h3>
              <p > I have experience using React and Flux-based libraries to build reliable and maintainable single page apps. As well as experience with accompanying tools like Babel, Node.js, and Webpack.</p>
              </li>
              <li onClick={expandItem}>
                <h3 >AJAX</h3>
                <p > I understand the importance of performant asynchronous code.</p>
              </li>
              <li onClick={expandItem}>
                <h3 >Automated Testing</h3>
                <p > I have experience testing with React and Jest, as well as other browser tools for quick and efficient bug squashing.</p>
              </li>
            </ul>
        </ScrollEffects>
      </Block>
  )
}

const QuoteBlock = (props) => {

  return (
      <Block className="colored" >
        <ScrollEffects animate='fadeIn' >
          <div>
            <blockquote className="quote">{props.quote}</blockquote>
            <sub className="contrast-header cite"><em>{props.cite}</em></sub>
          </div>
        </ScrollEffects>
      </Block>
  )
}


export default Home;
