
const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')

router.route('/customers').get ( customerController.getCustomers)

module.exports = router


