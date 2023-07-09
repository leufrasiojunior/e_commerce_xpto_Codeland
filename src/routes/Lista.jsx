
import { React, useState, useEffect } from "react";
import { getIds } from "../services/getIds";
import { useNavigate } from "react-router-dom";

function Lista() {
    const [ids, setIds] = useState([]);
    const [idserro, setIdserro] = useState("");
    const navigate = useNavigate();
    function handleClick(item) {
        // console.log(id);
        navigate("/detail/" + item);
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
        <div className="container" key="index">
            {
                idserro ? (
                    <div>
                        <h2>Algo deu errado.</h2>
                    </div>
                ) : (
                    ids.map((i, index) => (
                        <div>
                            <div key={i.id} className="box">
                                <div className="img"><img src={i.imagens[0].url} alt={i.nome} key={i.nome}></img></div>
                                <div className="nome" key={i.nome}>{i.nome}</div>
                                <div className="preco" key={i.preco}>R$: {i.preco}</div>
                                <button className="button-17" onClick={() => handleClick(i.id)} key={index}>Ver detalhes</button>
                            </div>
                        </div>
                    ))
                )
            }
        </div >
    );
}

export default Lista;
