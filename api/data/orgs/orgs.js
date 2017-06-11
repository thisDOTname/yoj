var mysql = require('mysql')
const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'helloworld',
  database: 'foo'
})

module.exports = {
  getAllOrgs : function (req, res) {
    DB.query('SELECT * FROM organisations', function (error, results, fields) {
      if (error) throw error
      res.send(results)
    })
  },
  addOrg : function (req, res) {
      DB.query('INSERT INTO organisations (org_name, org_website, org_desc, created_by) VALUES (?, ?, ?, ?)', [req.body.name, req.body.website, req.body.desc, req.body.created_by], function (error, results, fields) {
      if (error) {
        res.status(500)
        res.send('DB ERROR')
        throw error
      } else {
        res.status(200)
        res.json({ 'org_id': results.insertId })
      }
    })
  }
}