import { getIds } from "../services/getIds"
import { useParams } from 'react-router-dom';
import { React, useState, useEffect } from "react";

function DetailsProduct() {
    let { id } = useParams();
    // console.log(id);
    const [produto, setProduto] = useState([]);
    const [prodErro, setProdErro] = useState('');

    useEffect(() => {
        obterproduto();
    }, []);

    const obterproduto = () => {
        getIds(id)
            .then((resp) => {
                setProduto(resp)
                // console.log(resp)
            }
            )
            .catch((err) => setProdErro(err));

    };
    return (
        <div>
            {prodErro ? (
                <div>
                    <h2>Algo deu errado.</h2>
                </div>
            ) : (
                <div>
                    <div>
                        {produto.id}
                    </div>
                    <div>{produto.nome}</div>
                    <div>{produto.descricao}</div>
                </div>
            )}
        </div>
    )
}

export default DetailsProduct