const express = require('express')

let registrationController = require('../controllers/registrations_controller')
let router = express.Router()

router.get('/signup', registrationController.new)

router.route('/users').post(registrationController.create) //hago un post a USER porque es lo que voy a crear.

module.exports = router;