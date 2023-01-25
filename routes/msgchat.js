const { Router } = require('express');
const { comprobarTokenUsuario } = require('../helpers/jwt');
const { createMsgChat,findAll,deleteMsgChat } = require('../controllers/msgChat');


const router = Router();

/*----- MSGCHAT -----*/
// Crear msgChat
router.post('/createMsgChat',createMsgChat,comprobarTokenUsuario);
// Obtener todos los msgChat
router.get( '/findAll',findAll );
// Eliminar un msgChat por id
router.delete( '/:id',deleteMsgChat );

module.exports = router;