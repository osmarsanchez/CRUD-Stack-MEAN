//Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

//Api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos)

module.exports = router;