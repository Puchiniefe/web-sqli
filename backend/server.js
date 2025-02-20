const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Configuració de MySQL amb reconexió automàtica
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root", // Canvia-ho si has establert una altra contrasenya!
  database: "articles_db",
};


let db;

function connectDatabase() {
  db = mysql.createConnection(dbConfig);

  db.connect((err) => {
    if (err) {
      console.error("Error connectant a MySQL:", err);
      setTimeout(connectDatabase, 5000); // Reintentar després de 5s
    } else {
      console.log("✅ Connectat a MySQL!");
    }
  });

  db.on("error", (err) => {
    console.error("⚠️ Error de connexió MySQL:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.log("🔄 Intentant reconnectar...");
      connectDatabase();
    } else {
      throw err;
    }
  });
}

connectDatabase();

// ✅ Endpoint per buscar articles (vulnerable a SQLi com demanat)
app.get("/search", (req, res) => {
  const nom = req.query.nom;
  const sql = `SELECT * FROM articles WHERE nom = '${nom}'`; // 💀 Vulnerable a SQL Injection 💀
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

// ✅ Endpoint per inserir articles
app.post("/insert", (req, res) => {
  const { nom, quantitat, preu, nota } = req.body;
  const sql = "INSERT INTO articles (nom, quantitat, preu, nota) VALUES (?, ?, ?, ?)";
  db.query(sql, [nom, quantitat, preu, nota], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "✅ Article inserit correctament!" });
  });
});

// ✅ Endpoint per eliminar articles (ara amb DELETE)
app.delete("/delete", (req, res) => {
  const { nom } = req.query;
  const sql = "DELETE FROM articles WHERE nom = ?";
  db.query(sql, [nom], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "🗑️ Article eliminat correctament!" });
  });
});

// 🔥 Iniciar el servidor
const PORT = 3001;
app.listen(PORT, () => console.log(`🚀 Backend escoltant a http://localhost:${PORT}`));
