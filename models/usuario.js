
const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        requied: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        requied: [true, 'El correo es obligatorio'],
        unique: true,
    },
    password: {
        type: String,
        requied: [true, 'La contraseña es obligatoria'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        requied: true,
        // enum: ['ADMIN_ROLE', 'USER_ROLE'],
    },
    estado: {
        type: Boolean,
        default: true,
    },
    google:{
        type: Boolean,
        default: true 
    }



});

UsuarioSchema.methods.toJSON = function() {
    const {__v, password, ...usuario } = this.toObject();
    return usuario;
}


module.exports = model('Usuario', UsuarioSchema );