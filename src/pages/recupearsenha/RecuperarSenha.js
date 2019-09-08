import React, { Component } from 'react'
import './RecuperarSenha.css';

export default class RecuperarSenha extends Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(ev, button) {
        ev.preventDefault();
        this.props.onClick(button);
    }

    render() {
        return(
            <div className="center">
                <form>
                    <div>
                        <input type="email" placeholder="Email"></input>
                    </div>
                    <div>
                        <button type="submit">Recupear</button>
                    </div>
                    <div>
                        <a href="#" onClick={ev => this.handleButtonClick(ev, "register")}>Não possuo uma conta</a>
                    </div>
                </form>
            </div>
        );
    }
}
