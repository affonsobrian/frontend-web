import React, { Component } from 'react'
import './Cadastro.css';
import axios from 'axios';

export default class Cadastro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            RG: ''
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleFistNameChange = this.handleFistNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleRGChange = this.handleRGChange.bind(this);
    }

    async handleButtonClick(ev) {
        ev.preventDefault();
        const response = await axios.post(
            'http://localhost:65345/api/Person',
            { 
                FirstName: this.state.firstName,
                LastName: this.state.lastName,
                RG: this.state.RG
            },
            { headers: { 'Content-Type': 'application/json' } }
            );
    }

    handleFistNameChange(ev) {
        ev.preventDefault();
        this.setState({
            firstName: ev.target.value
        })
    }

    handleLastNameChange(ev) {
        ev.preventDefault();
        this.setState({
            lastName: ev.target.value
        })
    }

    handleRGChange(ev) {
        ev.preventDefault();
        this.setState({
            RG: ev.target.value
        })
    }

    render() {
        return(
            <div className="center">
                <form>
                    <div>
                        <input type="text" placeholder="Primeiro nome" onChange={this.handleFistNameChange}></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Último nome" onChange={this.handleLastNameChange}></input>
                    </div>
                    <div>
                        <input type="text" placeholder="RG" onChange={this.handleRGChange}></input>
                    </div>
                    <div>
                        <button onClick={this.handleButtonClick}>Cadastrar pessoa</button>
                    </div>
                </form>
            </div>
        );
    }
}
