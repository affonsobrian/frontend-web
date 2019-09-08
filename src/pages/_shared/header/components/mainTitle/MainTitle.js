import React, { Component } from 'react'
import './MainTitle.css'
import Logo from '../../../../../imgs/facens.png';

export default class MainTitle extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
        this.handleButtonClick.bind(this);
    }
    
    handleButtonClick = event => {
        event.preventDefault();
        this.props.onClick('home');
    }

    render() {
        return (
        <div id='mainTitle' className='mainTitle'>
            <button onClick={this.handleButtonClick}><img src={Logo}/></button>
        </div>
        )
    }
}
