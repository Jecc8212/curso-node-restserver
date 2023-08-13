
const {Router} = require('express')
const {usuariosGet, usuariosPut, usuariosPost, usuariosPath, usuariosDelete} = require('../controllers/usuarios');
const { check } = require('express-validator');

const {validarCampos} = require('../middlewares/validar-campos')
const {esRolValido, existeEmail, emailExiste, usuarioExistePorId} = require('../helpers/db-validators')
const router = Router();

router.get('/', usuariosGet)

router.put('/:id',[
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(usuarioExistePorId),
    check('rol').custom(esRolValido),
    validarCampos
], usuariosPut)

router.post('/',[
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('password', 'el password es obligatorio y mayor a 6 caracteres').isLength({min: 6}),
    check('correo').custom(emailExiste),
    check('rol').custom( esRolValido),
    // check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
] ,usuariosPost)

router.delete('/:id',[
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(usuarioExistePorId),
    validarCampos

], usuariosDelete )

router.patch('/', usuariosDelete)






module.exports = router;