import React from 'react';

import Header from "./header.js";
import Footer from "./footer.js";
import Recipe from "./recipe";
import logo from './logo.svg';
import './App.css';
import chocoPizza from './assets/choco-pizza.png';
import logoHeader from './assets/logo.png';
import vanPic from './assets/van-pic.png';
import printer from './assets/print-icon.png';
import fb from './assets/fb-icon.png';
import twit from'./assets/twit-icon.png';
import gp from'./assets/gp-icon.png';
import insta from'./assets/insta-icon.png';
import flic from'./assets/flic-icon.png';
import pint from'./assets/pint-icon.png';
import rss from'./assets/rss-icon.png';
import  mail from './assets/mail-icon.png';
import smallLogo from './assets/small-logo.png';

function App() {
  return (

<div>   

    <Header logoHeader={logoHeader} fb={fb} twit={twit} gp={gp} insta={insta} flic={flic} pint={pint} rss={rss} mail={mail}
     />
    <main>
        <article>
            <h1>Chocolate Pizza</h1>
            <div id="content">
                <section id="content">
                    <div id="byline">
                        <span id="article-details">Posted on 15 Dec 2013 / Desserts</span>
                        <span id="print">
                        <img src={printer} alt="print-icon"/>
                        Print
                        </span>
                    </div>
                    <img src={chocoPizza} alt="choco-pizza"/>
                    <p>For the fig swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
                    <p> Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled. </p> 
                    <p>Using an ice creame machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e. let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.</p>
                </section>
                <section id="recipe">
                    <ul>
                    <Recipe />
                    </ul>
                </section>
            </div>
        </article>
        <hr/>
        <div id="article-footer">
            <div id="author">
                <img src={vanPic} alt="van-pic"/>

            </div>
            <button id="share-recipe">Share Recipe</button>
        </div>
    </main>
    <Footer smallLogo={smallLogo}/>
    <script type="module" src="app.js"></script>

</div>

  );
}


export default App;
