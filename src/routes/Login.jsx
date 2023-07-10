import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const data = {
        "nome": "",
        "email": "",
        "senha": ""
    };
    const datalog = {
        email: "",
        senha: ""
    };

    const [inputData, setInputData] = useState(data);
    const [inputLogin, setinputLogin] = useState(datalog);

    const handledatalogin = (i) => {
        setinputLogin({ ...inputLogin, [i.target.name]: i.target.value })
    }
    // console.log(inputLogin)
    const cliclogin = (i) => {
        i.preventDefault();
        axios.post('https://infracode-api.onrender.com/auth/login', inputLogin)
            .then((users) => {
                alert('Usuário logado! Redirecionando para o carrinho'); localStorage.setItem('session', users.data.token); navigate("/carrinho")
            })

    }


    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://infracode-api.onrender.com/usuarios', inputData)
            .then((users) => {
                users.status === 201 ? alert("Usuário Cadastrado! Faça o login.") : alert("Usuário Não cadastrado. Tente novamente")
            })

    }

    // console.log(inputData)

    return (
        <div className='box-form'>
            <form className='form-cad'>
                <label>Cadastrar</label>
                <div>
                    <label className='lbl'>Nome</label>
                    <input type="text" placeholder='Seu nome' name='nome' value={inputData.nome} onChange={handleData} />
                </div>
                <div>
                    <label className='lbl'>Email</label>
                    <input type="email" placeholder='Insira seu e-mail' name='email' value={inputData.email} onChange={handleData} />
                </div>
                <div>
                    <label className='lbl'>Senha</label>
                    <input type="password" placeholder="Insira sua senha" name='senha' value={inputData.senha} onChange={handleData} />
                </div>
                <div>
                    <label className='lbl'>Rapita a senha</label>
                    <input type="password" placeholder="Insira sua senha" />
                </div>
                <div>
                    <button type="submit" className='button-68 space' onClick={handleSubmit}>Cadastrar</button>

                </div>

            </form>
            <div className='login'>
                <form>
                    <label className='lbl'>Login</label>
                    <div>
                        <label className='lbl'>Nome de usuario</label>
                        <input type="email" placeholder='Usuario' name='email' value={inputLogin.email} onChange={handledatalogin} />
                    </div>
                    <div>
                        <label className='lbl'>Senha</label>
                        <input type="password" placeholder='senha' name='senha' value={inputLogin.senha} onChange={handledatalogin} />
                    </div>
                    <div>
                        <button className='button-68 space' onClick={cliclogin}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login