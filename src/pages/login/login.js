import React from 'react';
import './login.css';
import logo from '../imgs/logo.png'

function Login(){
    return(
        <div className="center">
            <form action="https://www.facebook.com/login/device-based/regular/login/" method="post">
                <div>
                    <img src={logo} className="logo"></img>
                </div>
                <div>
                    <input type="text" name="email" placeholder="Usuário"></input>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Senha"></input>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>

                <div>
                    <a href="/recuperarsenha">Esqueci minha senha</a>
                </div>
                <div>
                    <a href="/cadastro">Não possuo uma conta</a>
                </div>
            </form>
        </div>
    );
}

export default Login;