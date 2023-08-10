
const {Router} = require('express')
const {usuariosGet, usuariosPut, usuariosPost, usuariosPath, usuariosDelete} = require('../controllers/usuarios')


const router = Router();

router.get('/', usuariosGet)

router.put('/:id', usuariosPut)

router.post('/',usuariosPost)

router.delete('/', usuariosPath )

router.patch('/', usuariosDelete)






module.exports = router;