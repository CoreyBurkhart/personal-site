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
              <a target="_blank" href="https://evening-shelf-15132.herokuapp.com/">
                <img src={simon} alt="simon game app"/>
                <figcaption >
                  Simon Game (WIP)
                </figcaption>
              </a>
            </figure>
            <figure className="fig">
              <a target="_blank" href="https://shielded-fjord-91245.herokuapp.com/">
                <img src={todo} alt="picture of a todo list app"/>
                <figcaption >
                  Todo List (JS design patterns
                </figcaption>
              )</a>
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
                <img src={weather} alt="Screenshot of weather app"/>
                <figcaption >
                  Weather App
                </figcaption>
              </a>
            </figure>
            <figure className="fig">
              <a target="_blank" href="https://cryptic-plains-24623.herokuapp.com/">
                <img src={wikiViewer} alt="Screenshot of Wikipedia Viewer"/>
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