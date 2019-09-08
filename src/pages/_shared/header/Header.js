import React, { Component } from 'react';
import './Header.css'
import MainTitle from './components/mainTitle/MainTitle';
import Buttons from './components/buttons/Buttons';

export default class Header extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='header' className='header'>
                <MainTitle onClick={this.props.onClick}/>
                <Buttons onClick={this.props.onClick} isLoggedIn={this.props.isLoggedIn} username={this.props.username}/>
            </div>
        );
    }
}