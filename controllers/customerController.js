
const customer = require('../models/customerModel')

exports.getCustomers = (req, res) => {
  res.json(customer.customers)
 
}


