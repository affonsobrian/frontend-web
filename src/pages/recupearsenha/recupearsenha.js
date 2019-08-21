import React from 'react';
import './recupearsenha.css';
import logo from '../imgs/logo.png'

function RecupearSenha(){
    return(
        <div className="center">
            <form>
                <div>
                    <img src={logo} className="logo"></img>
                </div>
                <div>
                    <input type="email" placeholder="Email"></input>
                </div>
                <div>
                    <button type="submit">Recupear</button>
                </div>
                <div>
                    <a href="/cadastro">Não possuo uma conta</a>
                </div>
            </form>
        </div>
    );
}

export default RecupearSenha;