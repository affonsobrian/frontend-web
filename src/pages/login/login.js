import React from 'react';
import './login.css';
import logo from '../imgs/logo.png'

function Login(){
    return(
        <div className="center">
            <form>
                <div>
                    <img src={logo} className="logo"></img>
                </div>
                <div>
                    <input type="text" placeholder="Usuário"></input>
                </div>
                <div>
                    <input type="password" placeholder="Senha"></input>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>

                <div>
                    <a href="#">Esqueci minha senha</a>
                </div>
            </form>
        </div>
    );
}

export default Login;