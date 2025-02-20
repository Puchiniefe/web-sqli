import { useState } from "react";

function App() {
  const [nom, setNom] = useState("");
  const [quantitat, setQuantitat] = useState("");
  const [preu, setPreu] = useState("");
  const [nota, setNota] = useState("");
  const [resultat, setResultat] = useState("");

  const search = async () => {
    const response = await fetch(`http://localhost:3001/search?nom=${nom}`);
    const data = await response.json();
    setResultat(JSON.stringify(data));
  };

  const insert = async () => {
    await fetch("http://localhost:3001/insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nom, quantitat, preu, nota }),
    });
  };

  const eliminar = async () => {
    await fetch("http://localhost:3001/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nom }),
    });
  };

  return (
    <div>
      <h2>Buscador</h2>
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      <button onClick={search}>Buscar</button>
      <pre>{resultat}</pre>

      <h2>Esborrar</h2>
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      <button onClick={eliminar}>Esborrar</button>

      <h2>Inserir</h2>
      <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      <input type="number" placeholder="Quantitat" value={quantitat} onChange={(e) => setQuantitat(e.target.value)} />
      <input type="number" placeholder="Preu" value={preu} onChange={(e) => setPreu(e.target.value)} />
      <input type="text" placeholder="Nota" value={nota} onChange={(e) => setNota(e.target.value)} />
      <button onClick={insert}>Inserir</button>
    </div>
  );
}

export default App;
