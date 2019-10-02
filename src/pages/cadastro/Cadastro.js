import React, { Component } from 'react'
import './Cadastro.css';
import axios from 'axios';

export default class Cadastro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.data.Id,
            firstName: this.props.data.FirstName,
            lastName: this.props.data.LastName,
            email: this.props.data.Email,
            RG: this.props.data.RG,
            telephone: this.props.data.Telephone
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleFistNameChange = this.handleFistNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleRGChange = this.handleRGChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleTelephoneChange = this.handleTelephoneChange.bind(this);
    }

    async handleButtonClick(ev) {
        ev.preventDefault();
        console.log(this.state.id);
        if (this.state.id) {
            axios.put(
                'http://localhost:65345/api/Person/' + this.state.id,
                {
                    Id: this.state.id,
                    FirstName: this.state.firstName,
                    LastName: this.state.lastName,
                    Email: this.state.email,
                    RG: this.state.RG,
                    Telephone: this.state.telephone
                },
                { headers: { 'Content-Type': 'application/json' } }
            ).then(response => {
                alert(response.data.Message);
            });
        }
        else {
            axios.post(
                'http://localhost:65345/api/Person',
                {
                    FirstName: this.state.firstName,
                    LastName: this.state.lastName,
                    Email: this.state.email,
                    RG: this.state.RG,
                    Telephone: this.state.telephone
                },
                { headers: { 'Content-Type': 'application/json' } }
            ).then(response => {
                alert(response.data.Message);
            });
        }
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

    handleEmailChange(ev) {
        ev.preventDefault();
        this.setState({
            email: ev.target.value
        })
    }

    handleTelephoneChange(ev) {
        ev.preventDefault();
        this.setState({
            telephone: ev.target.value
        })
    }

    render() {
        return (
            <div className="center div-cadastro">
                <div className="field-div">
                    <input type="text" placeholder="Primeiro nome" onChange={this.handleFistNameChange} value={this.state.firstName}></input>
                </div>
                <div className="field-div">
                    <input type="text" placeholder="Último nome" onChange={this.handleLastNameChange} value={this.state.lastName}></input>
                </div>
                <div className="field-div">
                    <input type="text" placeholder="Email" onChange={this.handleEmailChange} value={this.state.email}></input>
                </div>
                <div className="field-div">
                    <input type="text" placeholder="RG" onChange={this.handleRGChange} value={this.state.RG}></input>
                </div>
                <div className="field-div">
                    <input type="text" placeholder="Telephone" onChange={this.handleTelephoneChange} value={this.state.telephone} mask={"(00) 0000-0000"}></input>
                </div>
                <div className="field-div">
                    <button className="cadastro-button" onClick={this.handleButtonClick}>Cadastrar pessoa</button>
                </div>
            </div>
        );
    }
}
