var express = require('express')
var userService = require('./users')

var router = express.Router()

router.post('/user/add', function (req, res) {
    userService.addUser(req, res)
})

module.exports = router
