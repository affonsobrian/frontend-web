import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cadastro';
import RecupearSenha from './pages/recupearsenha/recupearsenha'
import Formulario from './pages/formulario/formulario'

ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<Cadastro />, document.getElementById('root'));
//ReactDOM.render(<RecupearSenha />, document.getElementById('root'));
//ReactDOM.render(<Formulario />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
