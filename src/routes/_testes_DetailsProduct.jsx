import { getIds } from "../services/getIds"
import { useParams } from 'react-router-dom';
import { React, useState, useEffect } from "react";
import { Fade } from 'react-slideshow-image';
import a from "../imgs/a.jpg";
import b from "../imgs/b.jpg";
import c from "../imgs/c.jpg";


const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}

function DetailsProduct() {
    let { id } = useParams();
    const [produto, setProduto] = useState([]);
    const [prodErro, setProdErro] = useState('');

    useEffect(() => {
        obterproduto();
    }, []);

    const obterproduto = () => {
        getIds(id)
            .then((resp) => setProduto(resp))
            .catch((err) => setProdErro(err));
    };
    return (
        <div className="container">
            {prodErro ? (
                <div>
                    <h2>Algo deu errado.</h2>
                </div>
            ) : (
                <div>
                    <div className="product-box">
                        <Fade>
                            <div className="slide-container">
                                {produto.imagens(({ fadeImage }, index) => (
                                    <div key={index}>
                                        <img style={{ width: '100%' }} src={fadeImage.url} />
                                    </div>
                                ))}
                            </div>
                        </Fade>
                    </div>
                    <div className="product-desc">
                        <div className="item">{produto.nome}</div>
                        <div className="desc">{produto.descricao}</div>
                        <div className="qtd">{produto.quantidade}</div>
                        <div className="preco">R$ {produto.preco}</div>
                    </div>
                    <button>Adicionar ao Carrinho</button>
                </div>
            )
            }

        </div >
    )

}
export default DetailsProduct
