const { Router } = require('express');
const { findAll,findOne } = require('../controllers/product');

const router = Router();

// Obtener todos los productos
router.get( '/findAll',findAll );
// Obtener un producto por id
router.get( '/:id',findOne );
module.exports = router;