import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
        this.handleButtonClick.bind(this);
    }

    handleButtonClick = (event, button) => {
        event.preventDefault();
        this.props.onClick(button);
    };


    render() {
            return (
                <div id='nav-bar' className='nav-bar'>
                    <button onClick={ (e) => {this.handleButtonClick(e, 'home')}}>Home</button>
                    <button onClick={ (e) => {this.handleButtonClick(e, 'create-activity')}}>Create Activity</button>
                    <button onClick={ (e) => {this.handleButtonClick(e, 'edit-activity')}}>Edit Activity</button>
                </div>
            )
    }
}
