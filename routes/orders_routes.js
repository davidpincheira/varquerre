const express = require('express')
let OrdersController = require('../controllers/orders_controller')

let router = express.Router()

router.route('/orders')
  .get(OrdersController.getAll)
  .post(OrdersController.create);

router.get('/orders/new', OrdersController.new);

module.exports = router;