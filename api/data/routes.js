var express = require('express')
var dataService = require('./data')

var router = express.Router()

router.route('/get/records').get(dataService.getRecords)

module.exports = router
