import React from 'react';
import './login.css';

function Login(){
    return(
        <div>
            <form>
                <div>
                    <input type="text" placeholder="Usuário"></input>
                </div>
                <div>
                    <input type="password" placeholder="Senha"></input>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>

                <div>
                    <a href="#">Esqueci minha senha</a>
                </div>
            </form>
        </div>
    );
}

export default Login;