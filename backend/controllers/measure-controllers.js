const Measure = require('../models/measure-models.js');

///Recherche par ID
exports.findOne = (req, res) => 
{
    Measure.findById(req.params.measureId).then(measure => 
        {
            if (!measure) 
            {
                return res.status(404).send
            ({
                message: 'measure not found with id ' + req.params.measureId
            });
            }

            res.send(measure);
        })
        
        .catch(err => 
            {
                if (err.kind === 'ObjectId') 
                {
                    return res.status(404).send
                ({
                    message: 'measure not found with id ' + req.params.measureId
                });
                }
                
                return res.status(500).send
                ({
                    message: 'Error retrieving measure with id ' + req.params.measureId
                });
            });
};

///Recherche de tous les éléments
exports.findAll = (req, res) => 
{
    Measure.find().then(measure => 
        {
            res.send(measure);
        })
        
        .catch(() => 
        {
            return res.status(500).send
            ({
            message: 'Some error occurred while retrieving measures'
            });
        });
};

///Supression
exports.delete = (req, res) => 
{
    Measure.findByIdAndRemove(req.params.measureId).then(measure => 
        {
            if (!measure) 
            {
                return res.status(404).send
            ({
                message: 'measure not found with id ' + req.params.measureId
            });
            }
        
            res.send({ message: 'measure deleted successfully!' });
        })

        .catch(err => 
        {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') 
            {
                return res.status(404).send
                ({
                    message: 'measure not found with id ' + req.params.measureId
                });
            }

            return res.status(500).send
            ({
                message: 'Could not delete measure with id ' + req.params.measureId
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
    
    const new_measure = new Measure
    ({
        _id: req.body._id,
        type:req.body.type,
        creationDate:req.body.creationDate,
        sensorId : req.body.sensorId,
        value:req.body.value,
    });

    new_measure.save().then(data => 
    {
        res.send(data);
    })
        
        .catch(() => 
        {
            return res.status(500).send
            ({
                message: 'Some error occurred while creating the new measure'
            });
        });
};

///Mise à jour
exports.update = (req, res) => 
{
    Measure.findByIdAndUpdate(req.params.measureId,
    {
        type:req.body.type,
        creationDate:req.body.creationDate,
        sensorId:req.body.sensorId,
        value:req.body.value,
    },
    { 
        new: true 
    }
    )
        .then(measure => 
        {
            if (!measure) 
            {
                return res.status(404).send
                ({
                    message: 'measure not found with id ' + req.params.measureId
                });
            }
            
            res.send(measure);
        })

        .catch(err => 
        {
            if (err.kind === 'ObjectId') 
            {
                return res.status(404).send
                ({
                    message: 'measure not found with id ' + req.params.measureId
                });
            }
            
            return res.status(500).send
            ({
                message: 'Some error occured while updating measure with id ' + req.params.measureId
            });
        });
};