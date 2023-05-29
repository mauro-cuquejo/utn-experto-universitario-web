let express = require('express');
let router = express.Router();
let helpers = require('../../helpers/helpers');
let novedadesModel = require('../../models/novedadesModel');

router.get('/', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades', {
        layout: '/admin/layout',
        anio: await helpers.getAnio(),
        usuario: req.session.nombre,
        novedades
    });
});

router.get('/agregar', async (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout',
        anio: await helpers.getAnio(),
    });
});

router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id;
    let novedad = await novedadesModel.getNovedadById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        anio: await helpers.getAnio(),
        novedad
    });
});

router.get('/eliminar/:id', async (req, res, next) => {
    const id = req.params.id;
    await novedadesModel.deleteNovedadById(id);
    res.redirect('/admin/novedades');
});

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.titulo != "" && req.body.descripcion != "" && req.body.precio != "") {
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                anio: await helpers.getAnio(),
                error: true,
                message: 'Todos los campos son requeridos (menos la imagen)'
            })
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregar', {
            layout: 'admin/layout',
            anio: await helpers.getAnio(),
            error: true,
            message: 'No se cargó la novedad'
        });
    }
});

router.post('/modificar', async (req, res, next) => {
    try {
        let obj = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            imagen: req.body.imagen
        }
        if (req.body.titulo != "" && req.body.descripcion != "" && req.body.precio != "") {
            await novedadesModel.modificarNovedadById(obj, req.body.id);
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/modificar', {
                layout: 'admin/layout',
                anio: await helpers.getAnio(),
                novedad: obj,
                error: true,
                message: 'Todos los campos son requeridos (menos la imagen)'
            })
        }
    } catch (error) {
        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            anio: await helpers.getAnio(),
            error: true,
            message: 'Error al modificar novedad'
        });
    }
});

module.exports = router;