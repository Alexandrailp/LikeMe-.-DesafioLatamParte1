const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '1234',
  database: 'likeme',
  allowExitOnIdle: true
});

app.use(cors()); 
app.use(express.json()); 

app.get('/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.post('/posts', async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body; 

    const consulta = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)';

    const valores = [titulo, url, descripcion, 0];

    await pool.query(consulta, valores);

    res.send("Post agregado con éxito");
  } catch (error) {
    console.error("Error al guardar el post:", error);
    res.status(500).json({ error: "Error al intentar guardar el post" });
  }
});

app.listen(PORT, () => {
  console.log(`¡Servidor encendido y escuchando en el puerto ${PORT}!`);
});