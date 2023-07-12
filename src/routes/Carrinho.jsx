import { useState, useEffect } from 'react'
import { NumericFormat } from 'react-number-format';
import { useNavigate } from "react-router-dom";

const Carrinho = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
    // const [logado, setLogado] = useState(false);

    // function verlogin() {
    //     setLogado(true);
    // }
    const token = localStorage.getItem('session');
    // console.log(token === null ? alert("Sessão não iniciada") : (alert("Sessão iniciada")

    const navigate = useNavigate();
    function remover() {
        localStorage.removeItem('carrinho');
        alert('Carrinho Limpo. Redirecionando para a página de produtos');
        navigate("/produtos");
    }
    console.log(token?.length)
    function comprar() {
        if (token?.length === undefined) {
            alert("Sessão não iniciada. Redirecionando para o login. Faça o login antes");
            navigate("/login")
        } else if (token?.length >= 1) { comprado() }
    }

    function comprado() {
        localStorage.removeItem('carrinho');
        alert('Parabéns! Seu pagamento esta em processamento e em breve receberá um e-mail');
        navigate("/produtos");
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('carrinho'));
        if (items) {
            setItems(items); setLoading(false)
        }
    }, []);
    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }
    // console.log(items?.length)
    return (
        <div className='disp-carrinho'>
            <h1>{items.nome}</h1>
            <NumericFormat value={items.preco.toFixed(2)}
                displayType={'text'} thousandSeparator={true} prefix={'R$ '} />
            <img src={items.imagens[0].url} alt={items.nome} key={items.nome} className='car-img'></img>
            <button className='button-68' onClick={() => comprar()}>Finalizar Compra</button>
            <button className='button-5' onClick={() => remover()}>x</button>
        </div>
    )
}

export default Carrinho