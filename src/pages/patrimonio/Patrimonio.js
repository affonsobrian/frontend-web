import React, { Component } from 'react'
import './Patrimonio.css';

export default class Patrimonio extends Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(ev, button) {
        ev.preventDefault();
        this.props.onClick(button);
        this.state = { disabled: false }
    }

    toggleChange = (e) =>{
        this.setState({
            isChecked: !this.state.disabled
        });
    }

    render() {
        return(
            <div className="center">
                    <div>
                        <input type="text" placeholder="Patrimônio"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Tempo máximo de locação" disabled = {(this.state.isChecked)}></input>
                        <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange}>Sem tempo limite</input>
                    </div>
                    <div>
                        <button onClick={ev => this.handleButtonClick(ev, "register")}>Cadastrar patrimônio</button>
                    </div>
            </div>
        );
    }
}
