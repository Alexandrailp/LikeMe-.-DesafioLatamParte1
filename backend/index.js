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

app.listen(PORT, () => {
  console.log(`¡Servidor encendido y escuchando en el puerto ${PORT}!`);
});