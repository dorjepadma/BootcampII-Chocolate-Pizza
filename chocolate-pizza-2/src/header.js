import React, { Component } from 'react'
import './App.css';

export default class Header extends Component{
render () {
    return( <header>
        <div id="logo-header">
            <img src={this.props.logoHeader} alt="logo"/>
            <span id="company">Delicious</span>
            <span id="motto">The best food blog on the web.</span>
        </div>
        <div id="share-header">
            <img src={this.props.fb} alt= "fb"/>
            <img src={this.props.twit} alt="twitter"/>
            <img src={this.props.gp} alt="gp"/>
            <img src={this.props.insta} alt="instagram"/>
            <img src={this.props.flic} alt="flicker"/>
            <img src={this.props.pint} alt="pintrest"/>
            <img src={this.props.rss} alt="rss"/>
            <img src={this.props.mail} alt="mail"/>
        </div>
        </header>
    )
}
}
