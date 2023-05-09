var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel')
var helpers = require('../../helpers/helpers');


router.get('/', async function (req, res, next) {
    res.render('admin/login', {
        anio: await helpers.getAnio(),
        layout: '/admin/layout'
    });
});

router.post('/', async (req, res, next) => {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;

        var data = await usuariosModel.getUserByUsenameAndPassword(usuario, password);
        if (data != undefined) {
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/login', {
                layout: '/admin/layout',
                anio: await helpers.getAnio(),
                error: true
            })
        }
    } catch (error) {
        console.log(error);
    }
});

router.get('/logout', async function (req, res, next) {
    req.session.destroy();
    res.render('admin/login', {
        layout: '/admin/layout',
        anio: await helpers.getAnio()
    })
})


module.exports = router;