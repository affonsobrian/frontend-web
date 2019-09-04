import React from 'react';
import './cadastro.css';
import logo from '../imgs/logo.png';

function Cadastro(){
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
                    <button action="#" type="submit">Cadastro</button>
                </div>

                <div>
                    <a href="#">Já possuo uma conta</a>
                </div>
            </form>
        </div>
    );
}

export default Cadastro;