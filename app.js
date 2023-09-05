const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Configura EJS como el motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos (CSS y JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal que renderiza la vista index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
