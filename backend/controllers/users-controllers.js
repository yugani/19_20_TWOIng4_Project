const User = require('../models/users-models.js');

///Recherche par ID
exports.findOne = (req, res) => 
{
    User.findById(req.params.userId).then(user => 
        {
            if (!user) 
            {
                return res.status(404).send
            ({
                message: 'User not found with id ' + req.params.userId
            });
            }

            res.send(user);
        })
        
        .catch(err => 
            {
                if (err.kind === 'ObjectId') 
                {
                    return res.status(404).send
                ({
                    message: 'User not found with id ' + req.params.userId
                });
                }
                
                return res.status(500).send
                ({
                    message: 'Error retrieving user with id ' + req.params.userId
                });
            });
};

///Recherche de tous les éléments
exports.findAll = (req, res) => 
{
    User.find().then(user => 
        {
            res.send(user);
        })
        
        .catch(() => 
        {
            return res.status(500).send
            ({
            message: 'Some error occurred while retrieving users'
            });
        });
};

///Supression
exports.delete = (req, res) => 
{
    User.findByIdAndRemove(req.params.userId).then(user => 
        {
            if (!user) 
            {
                return res.status(404).send
            ({
                message: 'User not found with id ' + req.params.userId
            });
            }
        
            res.send({ message: 'User deleted successfully!' });
        })

        .catch(err => 
        {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') 
            {
                return res.status(404).send
                ({
                    message: 'User not found with id ' + req.params.userId
                });
            }

            return res.status(500).send
            ({
                message: 'Could not delete user with id ' + req.params.userId
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

    const user = new User
    ({
        _id: req.body._id,
        location : req.body.location,
        personsInHouse : req.body.personsInHouse,
        houseSize: req.body.houseSize,
    });

    user.save().then(user => 
    {
        res.send(user);
    })
        
        .catch(() => 
        {
            return res.status(500).send
        ({
            message: 'Some error occurred while creating the new user'
        });
        });
};

///Mise à jour
exports.update = (req, res) => 
{
    User.findByIdAndUpdate(req.params.userId,
    {
        location: req.body.location,
        personsInHouse: req.body.personsInHouse,
        houseSize:req.body.houseSize,
    },
    { 
        new: true 
    }
    )
        .then(user => 
        {
            if (!user) 
            {
                return res.status(404).send
                ({
                    message: 'User not found with id ' + req.params.userId
                });
            }
            
            res.send(user);
        })

        .catch(err => 
        {
            if (err.kind === 'ObjectId') 
            {
                return res.status(404).send
                ({
                    message: 'User not found with id ' + req.params.userId
                });
            }
            
            return res.status(500).send
            ({
                message: 'Some error occured while updating user with id ' + req.params.userId
            });
        });
};