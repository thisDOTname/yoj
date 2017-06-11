var express = require('express')
var authService = require('./auth')

var router = express.Router()

router.get('/verifyEmail', function (req, res) {
    authService.verifyEmail(req, res)
})

module.exports = router
