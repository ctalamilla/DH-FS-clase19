const express = require('express');

const router = express.Router();

const path = require('path');

const controlador = require('../controllers/main.Controller')

router.get('/', controlador.index);

router.get('/about', controlador.about);


module.exports = router;