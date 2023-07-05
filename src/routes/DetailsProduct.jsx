import { getIds } from "../services/getIds"
import { useParams } from 'react-router-dom';
import { React, useState, useEffect } from "react";

function DetailsProduct() {
    let { id } = useParams();
    // console.log(id);
    const [produto, setProduto] = useState();
    const [prodErro, setProdErro] = useState('');
    useEffect(() => {
        obterproduto();
    }, []);

    const obterproduto = () => {
        getIds(id)
            .then((res) => {
                setProduto(res)
                setLoading(false)
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
                produto.map((p) => (
                    <div key={p.id}>
                        <div>{p.id}</div>
                        <div>{p.nome}</div>
                        <div>{p.preco}</div>
                    </div>
                ))
            )}
        </div>
    )
}

export default DetailsProduct
