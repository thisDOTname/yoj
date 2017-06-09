var express = require('express')
var dataService = require('./data')

var router = express.Router()

router.get('/get/records', function (req, res) {
    dataService.getRecords(req, res)
})

module.exports = router
