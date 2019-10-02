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
            alert(response.data.Message);
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
                <table>
                    <tr>
                        <td><div key={item.Id}></div></td>
                        <td><h2>{item.FirstName} {item.LastName}</h2></td>
                        <td><p>{item.Email}</p></td>     
                        <td><p>{item.RG}</p></td>
                        <td><p>{item.Telephone}</p></td>
                        <td><button onClick={e => this.Edit(e, item)}>Edit</button></td>
                        <td><button onClick={e => this.Excluir(e, item.Id)}>Delete</button></td>
                    </tr>
                    
                </table>
                )
            })}
        </ul>
        );
    }
}
