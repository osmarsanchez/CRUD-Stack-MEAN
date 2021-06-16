const express = require('express');
const conectarDB = require('./config/db')

//Creamos el servidor
const app = express();

//Conectar a la Bd
conectarDB();
app.use(express.json());

app.use('/api/productos', require('./routes/producto'));



app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})