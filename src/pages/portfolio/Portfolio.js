import React from 'react';
import Block from "../../util-components/Block.js";
//images
import simon from "../../images/simon-wip.png";
import tictactoe from "../../images/tic-tac-toe.png";
import pomodoro from "../../images/pomodoro.png";
import calc from "../../images/calc.png";

export default class Portfolio extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <Block className="colored heading-block resize" >
          <h1>Portfolio</h1>
        </Block>
          <section id="portfolio-content">
            <figure className="fig">
              <img src={simon} alt="simon game app"/>
              <figcaption >
                <a target="_blank" href="https://evening-shelf-15132.herokuapp.com/">Simon Game (WIP)</a>
              </figcaption>
            </figure>
            <figure className="fig">
              <img src={tictactoe} alt="tic-tac-toe app"/>
              <figcaption >
                <a target="_blank" href="https://serene-scrubland-78212.herokuapp.com/">Tic Tac Toe Game</a>
              </figcaption>
            </figure>
            <figure className="fig">
              <img src={pomodoro} alt="pomodoro app"/>
              <figcaption >
                <a  target="_blank" href="https://safe-coast-81196.herokuapp.com/">Pomodoro Clock</a>
              </figcaption>
            </figure>
            <figure className="fig">
              <img src={calc} alt="Javascript calculator"/>
              <figcaption >
                <a target="_blank" href="https://nameless-brushlands-20612.herokuapp.com/" >JavaScript Calculator</a>
              </figcaption>
            </figure>
          </section>
        </main>
    )
  }
}
