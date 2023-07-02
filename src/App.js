import "./App.css";
import { React, useState, useEffect } from "react";
import { getIds } from "./services/reloadIds";
function App() {
  const [ids, setIds] = useState([]);
  const [idserro, setIdserro] = useState("");
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
          </div>
        ))
      )}
    </div>
  );
}

export default App;
