import { getIds } from "../services/getIds"
import { useParams } from 'react-router-dom';
import { React, useState, useEffect } from "react";
import { Slide } from 'react-slideshow-image';

function DetailsProduct() {
    const [isLoading, setLoading] = useState(true);
    let { id } = useParams();
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        obterproduto();
    }, []);

    const obterproduto = () => {
        getIds(id)
            .then((resp) => {
                setProduto(resp); setLoading(false);
            });
    };
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <div className="container">
            <div>
                <div className="product-box">
                    <img src={produto.imagens[0].url} alt={produto.id} className="product-img"></img>
                    <img src={produto.imagens[1].url} alt={produto.id} className="product-img"></img>
                    <img src={produto.imagens[2].url} alt={produto.id} className="product-img"></img>
                </div>
                <div className="product-desc">
                    <div className="item">{produto.nome}</div>
                    <div className="desc">{produto.descricao}</div>
                    <div className="qtd">{produto.quantidade}</div>
                    <div className="preco">R$ {produto.preco}</div>

                </div>
                <button>Adicionar ao Carrinho</button>
            </div>
        </div >
    )

}
export default DetailsProduct
