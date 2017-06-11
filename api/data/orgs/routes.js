var express = require('express')
var orgsService = require('./orgs')

var router = express.Router()

router.get('/get/orgs/all', function (req, res) {
    orgsService.getAllOrgs(req, res)
})

router.post('/organisation/add', function (req, res) {
    orgsService.addOrg(req, res)
})

module.exports = router
