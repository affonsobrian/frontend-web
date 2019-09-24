import React, { Component } from 'react'
import './Cadastro.css';

export default class Cadastro extends Component {
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
                        <input type="text" placeholder="Primeiro nome"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Último nome"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="RG"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="E-Mail"></input>
                    </div>
                    <div>
                        <button onClick={ev => this.handleButtonClick(ev, "register")}>Cadastrar pessoa</button>
                    </div>
                </form>
            </div>
        );
    }
}
