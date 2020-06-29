const Order = require('../models').Order

module.exports = {
    getAll: function(req,res){
        Order.findAll().then(function(orders) {
            res.json(orders)
        })
    },
    create: function(req, res){
        Order.create({
            orderTime: Date.now(),
            totalPrice: req.body.totalPrice,
            status: req.body.status,
            userId: req.user.id
        }).then(result => {
            res.json(result)
        }).catch(err=>{
            res.json(err)
        })
    },
    new: function(req, res){
        res.render('orders/new')
    },
}