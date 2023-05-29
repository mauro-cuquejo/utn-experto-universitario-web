let express = require('express');
let router = express.Router();
let helpers = require('../../helpers/helpers');
let novedadesModel = require('../../models/novedadesModel');
let util = require('util');
let cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);



router.get('/', async function (req, res, next) {
    let anio = await helpers.getAnio();
    let usuario = req.session.nombre;

    let novedades = await novedadesModel.getNovedades();

    novedades = await novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.image(novedad.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
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

    res.render('admin/novedades', {
        layout: '/admin/layout',
        anio,
        usuario,
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

    let imagen_actual = (novedad.img_id != null) ? cloudinary.image(novedad.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
    }) : '';

    novedad = { ...novedad, imagen_actual };

    res.render('admin/modificar', {
        layout: 'admin/layout',
        anio: await helpers.getAnio(),
        novedad
    });
});

router.get('/eliminar/:id', async (req, res, next) => {
    const id = req.params.id;

    let novedad = await novedadesModel.getNovedadById(id);
    if (novedad.img_id) {
        await (destroy(novedad.img_id));
    }
    await novedadesModel.deleteNovedadById(id);
    res.redirect('/admin/novedades');
});

router.post('/agregar', async (req, res, next) => {
    try {

        let img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            let imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }


        if (req.body.titulo != "" && req.body.descripcion != "" && req.body.precio != "") {
            await novedadesModel.insertNovedad({ ...req.body, img_id });
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
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }
        let obj = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            img_id
        }
        if (req.body.titulo != "" && req.body.descripcion != "" && req.body.precio != "") {
            await novedadesModel.modificarNovedadById(obj, req.body.id);
            res.redirect('/admin/novedades');
        } else {
            let imagen_actual = (novedad.img_id != null) ? cloudinary.image(novedad.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            }) : '';

            let novedad = { ...obj, imagen_actual };
            console.log(novedad);

            res.render('admin/modificar', {
                layout: 'admin/layout',
                anio: await helpers.getAnio(),
                novedad,
                error: true,
                message: 'Faltan completar campos requeridos.'
            });
        }
    } catch (error) {
        console.log(error);

        let obj = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            img_id: req.body.imagen
        }
        let novedad = { ...obj, imagen_actual };
        res.render('admin/modificar', {
            layout: 'admin/layout',
            anio: await helpers.getAnio(),
            novedad,
            error: true,
            message: 'Error al modificar novedad'
        });
    }
});

module.exports = router;