const Sensor = require('../models/sensor-models.js');

///Recherche par ID
exports.findOne = (req, res) => 
{
    Sensor.findById(req.params.sensorId).then(sensor => 
        {
            if (!sensor) 
            {
                return res.status(404).send
            ({
                message: 'sensor not found with id ' + req.params.sensorId
            });
            }

            res.send(sensor);
        })
        
        .catch(err => 
            {
                if (err.kind === 'ObjectId') 
                {
                    return res.status(404).send
                ({
                    message: 'sensor not found with id ' + req.params.sensorId
                });
                }
                
                return res.status(500).send
                ({
                    message: 'Error retrieving sensor with id ' + req.params.sensorId
                });
            });
};

///Recherche de tous les éléments
exports.findAll = (req, res) => 
{
    Sensor.find().then(sensor => 
        {
            res.send(sensor);
        })
        
        .catch(() => 
        {
            return res.status(500).send
            ({
            message: 'Some error occurred while retrieving sensors'
            });
        });
};

///Supression
exports.delete = (req, res) => 
{
    Sensor.findByIdAndRemove(req.params.sensorId).then(sensor => 
        {
            if (!sensor) 
            {
                return res.status(404).send
            ({
                message: 'sensor not found with id ' + req.params.sensorId
            });
            }
        
            res.send({ message: 'sensor deleted successfully!' });
        })

        .catch(err => 
        {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') 
            {
                return res.status(404).send
                ({
                    message: 'sensor not found with id ' + req.params.sensorId
                });
            }

            return res.status(500).send
            ({
                message: 'Could not delete sensor with id ' + req.params.sensorId
            });
        });
};

///Création
exports.create = (req, res) => 
{
    if (!req.body._id) 
    {
        return res.status(400).send
        ({
            message: 'must have an id'
        });
    }
    
    const new_sensor = new Sensor
    ({
        _id: req.body._id,
        creationDate:req.body.creationDate,
        location : req.body.location,
        userID : req.body.userID,
    });

    new_sensor.save().then(data => 
    {
        res.send(data);
    })
        
        .catch(() => 
        {
            return res.status(500).send
            ({
                message: 'Some error occurred while creating the new sensor'
            });
        });
};

///Mise à jour
exports.update = (req, res) => 
{
    Sensor.findByIdAndUpdate(req.params.sensorId,
    {
        creationDate:req.body.creationDate,
        location: req.body.location,
        userID:req.body.userID,
    },
    { 
        new: true 
    }
    )
        .then(sensor => 
        {
            if (!sensor) 
            {
                return res.status(404).send
                ({
                    message: 'sensor not found with id ' + req.params.sensorId
                });
            }
            
            res.send(sensor);
        })

        .catch(err => 
        {
            if (err.kind === 'ObjectId') 
            {
                return res.status(404).send
                ({
                    message: 'senspr not found with id ' + req.params.sensorId
                });
            }
            
            return res.status(500).send
            ({
                message: 'Some error occured while updating sensor with id ' + req.params.sensorId
            });
        });
};