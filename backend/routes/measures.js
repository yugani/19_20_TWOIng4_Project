var express = require('express');
var router = express.Router();
var Measure = require('../controllers/measure-controllers.js');

// GET all measures
router.get('/', Measure.findAll);

// GET one measure
router.get('/:measureId', Measure.findOne);

// PUT Create one measure
router.put('/', Measure.create);

// POST Update one measure
router.post('/:measureId', Measure.update);

// DELETE Delete one measure
router.delete('/:measureId', Measure.delete);

module.exports = router;