import React, { Component } from 'react'
import './Cadastro.css';
import axios from 'axios';

export default class ListaDePessoas extends Component {

    constructor(props) {
        super(props)

        this.state = {}
        this.Excluir = this.Excluir.bind(this);
    }

    Excluir(ev, id) {
        ev.preventDefault();
        const =
    }

    render() {
        const response = await axios.get("http://localhost/65345/api/person",
            { headers: { 'ContentType': 'application/json' } }
        )

        let list = [];
        if (response.data.Content) {
            for (let p: response.data.Content)
            {
                list.push(   
                (<div>
                    <p id={p.Id}>p.FirstName p.LastName p.RG p.Email</p><button onClick={e => this.Excluir(e, p.Id)}></button>
                </div>))
            }
        }
        return <div>{list}</div>;
    }
}
