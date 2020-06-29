const User = require('../models').User;

module.exports = {
    new: function(req, res){
        res.render('registrations/new');
    },
    create: function(req, res){

        let data = {
            name: req.body.name,
            lastName: req.body.lastName,
            rol: req.body.rol,
            personnelNumber: req.body.personnelNumber,
            password: req.body.password
        }

        User.create(data).then(result=>{
            res.json(result)
        }).catch(err=>{
            res.json(err)
        });
    },
};