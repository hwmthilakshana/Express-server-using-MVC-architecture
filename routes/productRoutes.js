
const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController')

router.route('/product').get( productController.getproduct)

module.exports = router

