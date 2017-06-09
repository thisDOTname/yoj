var mysql = require('mysql')
const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'helloworld',
  database: 'foo'
})

module.exports = {
  getRecords : function (req, res) {
    DB.connect()
    DB.query('SELECT * FROM bar', function (error, results, fields) {
      if (error) throw error
      console.log('DB RESPONSE :: ', typeof(results[0]), results)
      results.forEach(function(row) {
        console.log(' *** ROW --> ', row, row.toast)
      })
      res.send(results)
    })
    console.log(' ##### CLOSING DB')
    DB.end()
  }
}