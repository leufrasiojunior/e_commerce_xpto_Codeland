import { getIds } from "../services/getIds"
import { useParams } from 'react-router-dom';
import { React, useState, useEffect } from "react";

function DetailsProduct() {
    let { id } = useParams();
    // console.log(id);
    const [produto, setProduto] = useState();
    const [prodErro, setProdErro] = useState('');
    const [loading, setLoading] = useState(true);
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
            { loading ? (
              <h2>loading</h2>
                ) :  {produto.map((p) => (
                    <div key={p.id}>
                        <div>{p.id}</div>}}
    )
}

export default DetailsProduct
