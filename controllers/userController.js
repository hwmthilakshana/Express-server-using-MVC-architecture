

const users = require('../models/userModel')

exports.getUsers = (req, res) => {
  res.json(users.user)
}
