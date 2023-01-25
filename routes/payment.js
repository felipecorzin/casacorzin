const { Router } = require('express');
const { addPayment,findAll,deletePayment } = require('../controllers/payment');

const router = Router();

/*--- PAYMENT ---*/ 
// Crear payment
router.post('/addPayment',addPayment);
// Obtener todos los payments
router.get('/findAll',findAll);
// Eliminar un payment por id
router.delete( '/:id',deletePayment );
module.exports = router;