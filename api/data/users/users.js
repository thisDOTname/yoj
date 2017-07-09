var mysql = require('mysql')
var sqlString = require('sqlstring')

const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'helloworld',
  database: 'foo'
})

module.exports = {
  addUser : function (req, res) {
      DB.query(sqlString.format('INSERT INTO users (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)', [req.body.fName, req.body.lName, req.body.email, req.body.password, req.body.role]), function (error, results, fields) {
      if (error) {
        res.status(500)
        res.send('DB ERROR WHILE ADDING USER')
        throw error
      } else {
        res.status(200)
        res.json({ 'user_id': results.insertId })
      }
    })
  }
}