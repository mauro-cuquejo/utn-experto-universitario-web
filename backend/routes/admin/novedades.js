var express = require('express');
var router = express.Router();
var helpers = require('../../helpers/helpers');

router.get('/', async function (req, res, next) {
    res.render('admin/novedades', {
        layout: '/admin/layout',
        anio: await helpers.getAnio(),
        usuario: req.session.nombre,
    });
});

module.exports = router;