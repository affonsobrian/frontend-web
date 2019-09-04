import React from 'react';
import './formulario.css';
import logo from '../imgs/logo.png';
import Cadastro from '../cadastro/cadastro'

function Formulario(){
    return(
        <div className="center">
            <form action="#" method="post">
                <div>
                    <img src={logo} className="logo"></img>
                </div>
                <div>
                    <label>Nome do projeto: </label>
                </div>
                <div>
                    <input type="text" placeholder="Nome do projeto"></input>
                </div>
                <div>
                    <label>Orientador: </label>
                </div>
                <div>
                    <select name="orientador"><option value="Breda">Breda</option></select>
                </div>
                <div>
                    <label>Máquinas utilizadas:</label>
                </div>
                <div>
                    <input type="checkbox" value="fresadora"/>
                    <label>Fresadora</label>
                </div>
                <div>
                    <input type="checkbox" value="vinil"/>
                    <label>Cortadora de Vinil</label>
                </div>
                <div>
                    <input type="checkbox" value="impressora3d"/>
                    <label>Impressora 3D</label>
                </div>
                <div>
                    <marquee>
                        <button type="submit">Enviar</button>
                    </marquee>
                </div>
            </form>
        </div>
    );
}

export default Formulario;