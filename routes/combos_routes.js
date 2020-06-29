const express = require('express')
let CombosController = require('../controllers/combos_controller')

let router = express.Router()

router.route('/combos')
  .get(CombosController.getAll)
  .post(CombosController.create);

router.get('/combos/new', CombosController.new);

router.get('/combos/:id/edit', CombosController.edit);

router.route('/combos/:id')
  .get(CombosController.showOne)
  .put(CombosController.update)
  .delete(CombosController.destroy)

module.exports = router;