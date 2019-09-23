import React, { Component } from 'react'
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    handleLogin(ev) {
        ev.preventDefault();
        this.props.handleLogin(this.state.username, this.state.password);
    }

    handleButtonClick(ev, button) {
        ev.preventDefault();
        this.props.onClick(button);
    }

    updateUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    updatePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        return (
            <div className="center">
                    <div>
                        <input type="text" name="username" placeholder="Usuário" onChange={this.updateUsername}></input>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Senha" onChange={this.updatePassword}></input>
                    </div>
                    <div>
                        <button onClick={this.handleLogin}>Login</button>
                    </div>
                    <div>
                        <a href="#" onClick={e => {this.handleButtonClick(e, 'password-recover')}}>Esqueci minha senha</a>
                    </div>
            </div>
        );
    }
}
