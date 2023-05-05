var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
    let fecha = new Date();
    let anio = fecha.getFullYear();

    res.render('admin/login', {
        anio: anio,
        layout: 'admin/layout'
    });
});

module.exports = router;