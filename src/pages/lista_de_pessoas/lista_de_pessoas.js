import React, { Component } from 'react'
import './lista_de_pessoas.css';
import axios from 'axios';

export default class ListaDePessoas extends Component {

    constructor(props) {
        super(props)

        this.state = {
            values: []
        }
        this.Excluir = this.Excluir.bind(this);
        this.Edit = this.Edit.bind(this);
    }

    Excluir(ev, id) {
        ev.preventDefault();
        axios.delete("http://localhost:65345/api/person/" + id,
            { headers: { 'ContentType': 'application/json' } 
        }).then(response => {
            alert(response.data.Content);
            this.getItems();
        });
    }

    componentDidMount() {
        this.getItems()
    }

    getItems() {
        axios.get("http://localhost:65345/api/person/",
            { headers: { 'ContentType': 'application/json' } }
        ).then((response) =>{
            this.setState({
                values: response.data.Content
            })
        })
    }

    Edit(ev, item) {
        ev.preventDefault();
        this.props.edit(item);
    }

    render() {
        return (
        <ul>
            {this.state.values.map( (item) => {
                return (
                <div key={item.Id}>
                    <h2>{item.FirstName} {item.LastName}</h2>
                    <p>{item.Email}</p>     
                    <p>{item.RG}</p>
                    <button onClick={e => this.Excluir(e, item.Id)}>Delete</button>
                    <button onClick={e => this.Edit(e, item)}>Edit</button>
                </div>
                )
            })}
        </ul>
        );
    }
}
