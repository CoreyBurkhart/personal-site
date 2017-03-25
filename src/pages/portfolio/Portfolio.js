import React from 'react';
import Block from "../../util-components/Block.js";
//images
import simon from "../../images/simon-wip.png";
import tictactoe from "../../images/tic-tac-toe.png";
import pomodoro from "../../images/pomodoro.png";
import calc from "../../images/calc.png";
import weather from "../../images/weather.png";
import wikiViewer from "../../images/wikiViewer.png";
import todo from "../../images/todo.png";
import btp from "../../images/BTP.png";
import d3 from "../../images/d3.png";


export default class Portfolio extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <Block className="colored heading-block resize for-nav" >
          <h1>Portfolio</h1>
        </Block>
          <section id="portfolio-content">
            <figure className="fig">
              <a target="_blank" href="https://bl.ocks.org/CoreyBurkhart/">
                <img src={d3} alt="D3.js"/>
                <figcaption >
                  D3 Data Visualisations
                </figcaption>
              </a>
            </figure>
            <figure className="fig">
              <a target="_blank" href="https://beyondthepixels.ghost.io/">
                <img src={btp} alt="Beyond The Pixels gaming journalism blog"/>
                <figcaption >
                  Beyond The Pixels Blog
                </figcaption>
              </a>
            </figure>
            <figure className="fig">
              <a target="_blank" href="https://evening-shelf-15132.herokuapp.com/">
                <img src={simon} alt="simon game app"/>
                <figcaption >
                  Simon Game (WIP)
                </figcaption>
              </a>
            </figure>
            <figure className="fig">
              <a target="_blank" href="https://shielded-fjord-91245.herokuapp.com/">
                <img src={todo} alt="todo list app"/>
                <figcaption >
                  Todo List (JS design patterns)
                </figcaption>
              </a>
            </figure>
            <figure className="fig">
              <a target="_blank" href="https://serene-scrubland-78212.herokuapp.com/">
                <img src={tictactoe} alt="tic-tac-toe app"/>
                <figcaption >
                  Tic Tac Toe Game
                </figcaption>
              </a>
            </figure>
            <figure className="fig">
              <a  target="_blank" href="https://safe-coast-81196.herokuapp.com/">
                <img src={pomodoro} alt="pomodoro app"/>
                <figcaption >
                  Pomodoro Clock
                </figcaption>
              </a>
            </figure>
            <figure className="fig">
              <a target="_blank" href="https://nameless-brushlands-20612.herokuapp.com/">
                <img src={calc} alt="Javascript calculator"/>
                <figcaption >
                   JavaScript Calculator
                </figcaption>
              </a>
            </figure>
            <figure className="fig">
              <a target="_blank" href="https://obscure-falls-67373.herokuapp.com/">
                <img src={weather} alt="weather app"/>
                <figcaption >
                  Weather App
                </figcaption>
              </a>
            </figure>
            <figure className="fig">
              <a target="_blank" href="https://cryptic-plains-24623.herokuapp.com/">
                <img src={wikiViewer} alt="Wikipedia Viewer"/>
                <figcaption >
                  Wikipedia Viewer
                </figcaption>
              </a>
            </figure>
          </section>
        </main>
    )
  }
}
