import { useState, useEffect } from 'react'
import { NumericFormat } from 'react-number-format';
import { useNavigate } from "react-router-dom";

const Carrinho = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const navigate = useNavigate();
    function remover() {
        localStorage.removeItem('carrinho');
        alert('Carrinho Limpo. Redirecionando para a página de produtos');
        navigate("/produtos");
    }
    function comprar() {
        localStorage.removeItem('carrinho');
        alert('Parabéns! ESeu pagamento esta em processamento e em breve receberá um e-mail');
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
            <buton className='button-68' onClick={() => comprar()}>Finalizar Compra</buton>
            <buton className='button-5' onClick={() => remover()}>x</buton>
        </div>
    )
}

export default Carrinho