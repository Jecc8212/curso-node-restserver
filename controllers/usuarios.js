const {response, request} = require('express')

const usuariosGet = (req = request, res = response) =>{
    const {q, nombre, apikey} = req.query;

    res.json({
        msg: 'get api Controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res = response) =>{

    const {id} = req.params;


    res.json({
        msg: 'put api UsuariosPut',
        id
    });
}

const usuariosPost = (req, res = response) =>{

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post api Controlador',
        nombre,
        edad
    });
}


const usuariosPath = (req, res = response) =>{
    res.json({
        msg: 'delete api Controlador'
    });
}


const usuariosDelete = (req, res = response) =>{
    res.json({
        msg: 'patch api Controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPath,
    usuariosDelete,

}