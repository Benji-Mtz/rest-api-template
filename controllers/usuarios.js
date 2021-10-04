const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {
    //viene de {{url}}/api/usuarios?q=hola&nombre=Benji&apikey=1234567890
    // const query = req.query; //query params
    const { q, nombre = "No name", page = 1 } = req.query;

    res.json({
        msg: "get API - controller",
        q,
        nombre,
        page
    });
}
const usuariosPost = (req, res = response) => {

    const { cliente, total } = req.body;

    res.json({
        msg: "Post API - controller",
        cliente,
        total
    });
}
const usuariosPut = (req, res = response) => {
    // id viene de la ruta {{url}}/api/usuarios/:id
    const id = req.params.id;

    res.json({
        msg: "Put API - controller",
        id
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "Patch API - controller"
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        "msg": "Delete API - controller"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}