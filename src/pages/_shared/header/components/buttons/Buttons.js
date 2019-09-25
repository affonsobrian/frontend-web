import React, { Component } from 'react'
import './Buttons.css'

export default class Buttons extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {};

        this.handleButtonClicked.bind(this);
    }

    handleButtonClicked = (event, button) => {
        event.preventDefault();
        //TODO Conditional Rendering if logged in or not
        this.props.onClick(button);
    }
    
    render() {
        let output;
        if(this.props.isLoggedIn) {
            output = (
            <div id='headerButtons' className='headerButtons'>
                <label>Hello {this.props.username}</label>
                <button id='registerButton' onClick={e => {this.handleButtonClicked(e, 'register')}}>Register</button>
                <button id='registerButton' onClick={e => {this.handleButtonClicked(e, 'list-person')}}>List</button>
                <button id='logoutButton' onClick={e => {this.handleButtonClicked(e, 'logout')}}>Logout</button>
            </div>
            )
        }
        else {
            output = (
                <div id='headerButtons' className='headerButtons'>
                    <button id='loginButton' onClick={e => {this.handleButtonClicked(e, 'login')}}>Login</button>
                </div>
            )
        }
                 
        return output;
    }
}
