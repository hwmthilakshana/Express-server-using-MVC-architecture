

const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.route('/users').get( userController.getUsers)

module.exports = router

