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
                // console.log(res)
            }
            )
            .catch((err) => setProdErro(err));

    };
    return (
        <div></div>

    )
}

export default DetailsProduct