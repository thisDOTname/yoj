var express = require('express')
var authService = require('./auth')

var router = express.Router()

router.get('/verifyEmail', function (req, res) {
    authService.verifyEmail(req, res)
})

router.post('/login', function (req, res) {
    authService.doLogin(req, res)
})

router.post('/user/add', function (req, res) {
    authService.addUser(req, res)
})

module.exports = router
