const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: './menuCelular.html', // Reemplaza con el dominio correcto
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
  exposedHeaders: ['Content-Range', 'X-Content-Range']
};

app.use(cors(corsOptions));

app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', './menuCelular.html');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Max-Age', '86400'); // Cachea la respuesta durante 24 horas
  res.setHeader('Access-Control-Allow-Private-Network', 'true'); // Solo si estás accediendo a una red privada
  res.sendStatus(204);
});

// Ruta para servir los archivos estáticos
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
