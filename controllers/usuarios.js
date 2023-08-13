const {response, request} = require('express')
const Usuario = require('../models/usuario')
const bcriptjs = require('bcryptjs');

const usuariosGet = async(req = request, res = response) =>{
    const { limite = 5, desde = 0}  = req.query;
    const query = {estado: true} 

    // const usuarios = await Usuario.find( query )
    // .skip(Number(desde))
    // .limit(Number(limite));

    // const total = await Usuario.countDocuments( query );
    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments( query ),
        Usuario.find( query )
       .skip(Number(desde))
         .limit(Number(limite))
    ]);


    res.json({
      total,
      usuarios
    });
}

const usuariosPut = async(req, res = response) =>{

    const {id} = req.params;
    const {_id, password, google, correo, ...resto} = req.body;

    //TODO  validar contra BD

    if(password){
         //encriptar la contraseña
         const salt = bcriptjs.genSaltSync();
        resto.password = bcriptjs.hashSync( password, salt );
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);


    res.json(usuario);
}

const usuariosPost = async(req, res = response) =>{

  


    const { nombre, correo, password, rol } = req.body;
    const usuario =  new Usuario({nombre, correo, password, rol});


    //Varificar si el correo existe
    
    


    //encriptar la contraseña
    const salt = bcriptjs.genSaltSync();
    usuario.password = bcriptjs.hashSync( password, salt );

    //guardar en base de datos
    await  usuario.save();



    res.json({
        usuario
    });
}


const usuariosPath = (req, res = response) =>{
    res.json({
        msg: 'delete api Controlador'
    });
}


const usuariosDelete = async(req, res = response) =>{
    const {id} = req.params;
    //Fisicamente
    // const usuario = await Usuario.findByIdAndDelete(id);

    const usuario = await Usuario.findByIdAndUpdate(id, {estado:false});

    res.json(usuario);
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPath,
    usuariosDelete,

}