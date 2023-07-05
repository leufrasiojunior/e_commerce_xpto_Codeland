
import { React, useState, useEffect } from "react";
import { getIds } from "../services/getIds";
import { useNavigate } from "react-router-dom";

function Lista() {
    const [ids, setIds] = useState([]);
    const [idserro, setIdserro] = useState("");
    const navigate = useNavigate();
    function handleClick(id) {
        // console.log(id);
        navigate("/detail/" + id);
    }
    useEffect(() => {
        reloadIds();
    }, []);
    const reloadIds = () => {
        getIds()
            .then((res) => setIds(res))
            .catch((err) => setIdserro(err));
    };
    return (
        <div>
            {idserro ? (
                <div>
                    <h2>Algo deu errado.</h2>
                </div>
            ) : (
                ids.map((i) => (
                    <div key={i.id}>
                        <div>{i.id}</div>
                        <div>{i.nome}</div>
                        <div>{i.preco}</div>
                        <button onClick={() => handleClick(i.id)}>Ver detalhes</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Lista;
