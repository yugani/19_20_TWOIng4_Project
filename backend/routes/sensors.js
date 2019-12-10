var express = require('express');
var router = express.Router();
var Sensor = require('../controllers/sensor-controllers.js');

// GET all sensors
router.get('/', Sensor.findAll);

// GET one sensor
router.get('/:sensorId', Sensor.findOne);

// PUT Create one sensor
router.put('/', Sensor.create);

// POST Update one sensor
router.post('/:sensorId', Sensor.update);

// DELETE Delete one sensor
router.delete('/:sensorId', Sensor.delete);

module.exports = router;