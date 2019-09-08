import React, { Component } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Header from './pages/_shared/header/Header';
import Footer from './pages/_shared/footer/Footer';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import RecuperarSenha from './pages/recupearsenha/RecuperarSenha'

export default class App extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);

		this.state = {
			currentView: 'login',
			isLoggedIn: false,
			token: undefined
		}

		this.handleButtonsClicks.bind(this);
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

	handleLogin = (token, username) => {
		if (token) {
			this.setState({ token: token });
			this.setState({ username: username });
			this.setState({ isLoggedIn: true });
			this.setState({ currentView: 'home' });
		}
	}

	render() {
		let currentView = <Login />;
		// if(!this.state.isLoggedIn) {
		// 	this.setState({currentView: 'login'});
		// }
		// else
		// {
		switch (this.state.currentView) {
			case 'home':
				currentView = <Home onClick={this.handleButtonsClicks} />;
				break;
			case 'register':
				currentView = <Cadastro onClick={this.handleButtonsClicks}/>;
				break;
				case 'password-recover':
				currentView = <RecuperarSenha onClick={this.handleButtonsClicks} />;
				break;
			default:
				currentView = <Login onClick={this.handleButtonsClicks} />;
				break;
		}
		// }

		return (
			<div id='page' className='page'>
				<Header onClick={this.handleButtonsClicks} isLoggedIn={this.state.isLoggedIn} username={this.state.username} />
				{currentView}
				<Footer onClick={this.handleButtonsClicks} />
			</div>
		);
	}
}
