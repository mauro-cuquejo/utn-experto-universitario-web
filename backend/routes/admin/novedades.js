var express = require('express');
var router = express.Router();
var helpers = require('../../helpers/helpers');
var novedadesModel = require('../../models/novedadesModel');

router.get('/', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades', {
        layout: '/admin/layout',
        anio: await helpers.getAnio(),
        usuario: req.session.nombre,
        novedades
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.titulo != "" && req.body.descripcion != "" && req.body.precio != "") {
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos (menos la imagen)'
            })
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargó la novedad'
        });
    }
});

module.exports = router;