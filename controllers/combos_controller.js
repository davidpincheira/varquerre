const Combo = require('../models').Combo

module.exports = {
    getAll: function(req,res){
        Combo.findAll().then(function(combos) {
            res.json(combos)
            //res.render('combos/index', {combos})
        })
    },
    showOne: function(req,res){
        Combo.findByPk(req.params.id).then((combo) => {
            res.json(combo)
            //res.render('combos/show', {combo})
        })
    },
    create: function(req, res){
        Combo.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        }).then(result => {
            res.json(result)
        }).catch(err=>{
            res.json(err)
        })
    },
    //actualizar un registro
    update: function(req,res){
        Combo.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(response){
            //res.json(response);//for api
            res.redirect('/combos/'+req.params.id)
        })
    },
    
    new: function(req, res){
        res.render('combos/new')
    },
    edit: function(req, res){
        Combo.findByPk(req.params.id).then(function(combo){
            res.render('combos/edit', {combo})
        })
    },
    
    destroy: function(req,res){
        Combo.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(contadorElementosEliminados){
            res.redirect('/combos')
        })
    }
}