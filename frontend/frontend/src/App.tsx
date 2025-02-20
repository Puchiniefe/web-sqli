import { useState } from "react";

function App() {
  const [nom, setNom] = useState("");
  const [quantitat, setQuantitat] = useState("");
  const [preu, setPreu] = useState("");
  const [nota, setNota] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteTerm, setDeleteTerm] = useState("");
  const [result, setResult] = useState("");

  const handleInsert = async () => {
    const response = await fetch("http://localhost:3001/insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nom, quantitat, preu, nota }),
    });
    const data = await response.json();
    setResult(data.message);
  };

  const handleSearch = async () => {
    const response = await fetch(`http://localhost:3001/search?nom=${searchTerm}`);
    const data = await response.json();
    setResult(JSON.stringify(data));
  };

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3001/delete?nom=${deleteTerm}`, {
      method: "DELETE",
    });
    const data = await response.json();
    setResult(data.message);
  };

  return (
    <div>
      <h1>Gestió d'Articles</h1>

      {/* Cerca */}
      <input type="text" placeholder="Nom a cercar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>

      {/* Esborrar */}
      <input type="text" placeholder="Nom a esborrar" value={deleteTerm} onChange={(e) => setDeleteTerm(e.target.value)} />
      <button onClick={handleDelete}>Esborrar</button>

      {/* Inserció */}
      <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      <input type="number" placeholder="Quantitat" value={quantitat} onChange={(e) => setQuantitat(e.target.value)} />
      <input type="number" placeholder="Preu" value={preu} onChange={(e) => setPreu(e.target.value)} />
      <input type="text" placeholder="Nota" value={nota} onChange={(e) => setNota(e.target.value)} />
      <button onClick={handleInsert}>Insertar</button>

      {/* Resultat */}
      <div>
        <h2>Resultat:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
