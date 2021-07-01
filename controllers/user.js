const { response } = require('express');
// const { param } = require('../routes/user');

const usersGet = (req, res = response) => {

    const { param1, param2, param3 = 'no value' } = req.query;

    res.json({
        msg: 'get API - controller',
        param1,
        param2,
        param3
    })
}

const usersPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controller',
        nombre,
        edad
    })
}

const usersPut = (req, res = response) => {

    let { id } = req.params;
    
    id = (id) ? id : 1;
    res.json({
        msg: 'put API - controller',
        id
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}