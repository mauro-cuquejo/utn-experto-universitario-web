let express = require('express');
let router = express.Router();
let novedadesModel = require('../models/novedadesModel');
let cloudinary = require('cloudinary').v2;

router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.url(novedad.img_id, {
                width: 512,
                height: 425,
                crop: 'scale'
            });
            return {
                ...novedad,
                imagen
            }
        } else {
            return {
                ...novedad,
                imagen: ''
            }
        }
    });

    res.json(novedades);
});

module.exports = router;