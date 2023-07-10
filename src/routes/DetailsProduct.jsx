import { getIds } from "../services/getIds"
import { useParams } from 'react-router-dom';
import { React, useState, useEffect } from "react";
import { Zoom } from 'react-slideshow-image';
import { NumericFormat } from 'react-number-format';
import { useNavigate } from "react-router-dom";

function DetailsProduct() {

    // const [idCarrinho, setidCarrinho] = useState([]);
    const [isLoading, setLoading] = useState(true);
    let { id } = useParams();
    const [produto, setProduto] = useState([]);

    const navigate = useNavigate();
    function comprar(comprar, comprarvalor) {
        localStorage.setItem(comprar, JSON.stringify(comprarvalor));
        navigate("/carrinho");;
    }


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
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="grid">
            <div className="containerDetails">
                <div className="product-box">
                    <div className="slide-container">
                        <Zoom scale={1.1}>
                            {produto.imagens.map((fadeImage) => (
                                <div key={produto.id}>
                                    <img className="product-img" src={fadeImage.url} alt={produto.id} />
                                </div>
                            ))}
                        </Zoom>
                    </div>
                </div>
                <div className="product-desc">
                    <h1 className="item">{produto.nome}</h1>
                    <p className="desc">{produto.descricao}</p>
                    <label className="qtd">Quantidade Disponível: {produto.quantidade}</label><br />
                    <NumericFormat value={produto.preco.toFixed(2)}
                        displayType={'text'} thousandSeparator={true} prefix={'R$ '} /><br />
                    {/* <button className="button-68" onClick={() => armazenar("carrinho", produto)}>Adicionar ao Carrinho</button> */}
                    <button className="button-68" onClick={() => comprar("carrinho", produto)}>Comprar Agaora</button>
                </div>

            </div>
        </div >
    )

}
export default DetailsProduct
