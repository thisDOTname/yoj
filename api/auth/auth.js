var mysql = require('mysql')
var sqlString = require('sqlstring')

const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'helloworld',
  database: 'foo'
})

module.exports = {
  verifyEmail : function (req, res) {
    let email = req.query.e
    DB.query(sqlString.format('SELECT * FROM users where email = ?', [email]), function (error, results, fields) {
      if (error) throw error
      console.log('DB RESPONSE :: ', typeof(results[0]), results)
      if(results.length) {
        res.status(409)
        res.send('Already exists')
      } else {
        res.status(200)
        res.send('[]')
      }
    })
    console.log(' ##### CLOSING DB')
  }
}