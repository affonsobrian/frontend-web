import React, { Component } from 'react'
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(ev, button) {
        ev.preventDefault();
        this.props.onClick(button);
    }
    render() {
        return (
            <div className="center">
                
                    <div>
                        <input type="text" name="email" placeholder="Usuário"></input>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Senha"></input>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>

                    <div>
                        <a href="#" onClick={e => {this.handleButtonClick(e, 'password-recover')}}>Esqueci minha senha</a>
                    </div>
            </div>
        );
    }
}
