import React, { Component } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Header from './pages/_shared/header/Header';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import RecuperarSenha from './pages/recupearsenha/RecuperarSenha';
import ListaDePessoas from './pages/lista_de_pessoas/lista_de_pessoas';
import axios from 'axios';

export default class App extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);

		this.state = {
			currentView: 'login',
			isLoggedIn: false,
			token: undefined,
			person: {}
		}

		this.handleButtonsClicks = this.handleButtonsClicks.bind(this);
	}

	handleButtonsClicks = (button) => {
		if (button === 'logout') {
			this.setState({
				isLoggedIn: false,
				token: undefined,
				currentView: 'login'
			})
		}
		else
			this.setState({ currentView: button })
	}

	handleLogin = async (username, password) => {
		await axios.post(
		'http://localhost:65345/api/Auth/Login',
		{ 
			username: username,
			password: password
		},
		{ headers: { 'Content-Type': 'application/json' } }
		).then(response => {
			if (response.data.Content) {
				this.setState({ token: response.data.Content });
				this.setState({ username: username });
				this.setState({ isLoggedIn: true });
				this.setState({ currentView: 'home' });
			}
			else
				alert(response.data.Message);
		});
	}
	
	editPerson = (person) => {
		this.setState({
			currentView: 'edit-person',	
			person: person
		})
	}

	render() {
		let currentView = <Login />;

		switch (this.state.currentView) {
			case 'home':
				currentView = <Home onClick={this.handleButtonsClicks} />;
				break;
			case 'register':
				currentView = <Cadastro onClick={this.handleButtonsClicks} data={{}}/>;
				break;
			case 'password-recover':
				currentView = <RecuperarSenha onClick={this.handleButtonsClicks} />;
				break;
			case 'list-person':
				currentView = <ListaDePessoas onClick={this.handleButtonsClicks} edit={this.editPerson}/>;
				break;
			case 'edit-person':
				currentView = <Cadastro onClick={this.handleButtonsClicks} data={this.state.person}/>;
				break;
			default:
				currentView = <Login onClick={this.handleButtonsClicks} handleLogin={this.handleLogin}/>;
				break;
		}

		return (
			<div id='page' className='page'>
				<Header onClick={this.handleButtonsClicks} isLoggedIn={this.state.isLoggedIn} username={this.state.username} token={this.state.token}/>
				<body className="body">{currentView}</body>
			</div>
		);
	}
}
