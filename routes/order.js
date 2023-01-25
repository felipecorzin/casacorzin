const { Router } = require('express');
const { createOrder,findAll,deleteOrder } = require('../controllers/order');

const router = Router();

/*--- ORDER ---*/ 
// Crear order
router.post('/createOrder',createOrder);
// Obtener todos los orders
router.get('/findAll',findAll);
// Eliminar un order por id
router.delete( '/:id',deleteOrder );
module.exports = router;