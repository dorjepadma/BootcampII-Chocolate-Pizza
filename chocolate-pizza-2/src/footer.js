import React, { Component } from 'react'
import './App.css';

export default class Footer extends Component {
    render () {
        return(
        <footer>
            <div id="footer-hr">
            <hr/>
            <img src={this.props.smallLogo} alt="small-logo"/>
            <hr/>
            </div>
            <p>Delicious &copy; 2013 All Rights Reserved.</p>
            <p>Proudly published with Ghost.</p>
        </footer>
        )
    }
}
