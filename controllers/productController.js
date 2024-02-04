
const product = require('../models/productModel')

exports.getproduct = (req, res) => {
  res.json(product.product)
}


