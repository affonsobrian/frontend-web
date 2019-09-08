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
                        <input type="text" placeholder="Usuário"></input>
                    </div>
                    <div>
                        <input type="email" placeholder="Email"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Primeiro nome"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Último nome"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Rua"></input>
                    </div>
                    <div>
                        <label></label>
                        <input type="number" min="0" max="99999999" placeholder="Número"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Bairro"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Cidade"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Estado"></input>
                    </div>
                    <div>
                        <input type="password" placeholder="Senha"></input>
                    </div>
                    <div>
                        <input type="password" placeholder="Confirmar senha"></input>
                    </div>
                    
                    <div>
                        <button onClick={ev => this.handleButtonClick(ev, "register")}>Cadastro</button>
                    </div>
    
                    <div>
                        <a href="#" onClick={ev => this.handleButtonClick(ev, "login")}>Já possuo uma conta</a>
                    </div>
                </form>
            </div>
        );
    }
}
