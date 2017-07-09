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
<<<<<<< HEAD
    DB.query(sqlString.format('SELECT * FROM users where email = ?', [email]), function (error, results, fields) {
      if (error) throw error
      console.log('DB RESPONSE :: ', typeof(results[0]), results)
      if(results.length) {
        res.status(409)
        res.send('Already exists')
=======
    DB.query('SELECT * FROM users where email = ?', [email], function (error, results, fields) {
      if (error) {
        res.status(500)
        res.send('DB ERROR WHILE VERIFYING EMAIL | e : '+ error)
        throw error
>>>>>>> 901042eca9fd154642522381f5e2f4c01f2b6d3c
      } else {
        if(results.length) {
          res.status(409)
          res.send('User with email "' + email + '" already exists')
        } else {
          res.status(200)
          res.send('[]')
        }
      }
    })
  },
  addUser : function (req, res) {
    DB.query('INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)', [req.body.user.fName, req.body.user.lName, req.body.user.email, req.body.user.password], function (error, results, fields) {
      if (error) {
        res.status(500)
        res.send('DB ERROR WHILE INSERTING USER RECORD | e : '+ error)
        throw error
      } else {
        var userId = results.insertId
        DB.query('INSERT INTO organisations (org_name, org_website, org_desc, created_by) VALUES (?, ?, ?, ?)', [req.body.org.name, req.body.org.website, req.body.org.desc, userId], function (error, results, fields) {
          if (error) {
            res.status(500)
            res.send('DB ERROR WHILE CREATING ORGANISATION | e: ' + error)
            throw error
          } else {
            var orgId = results.insertId
            DB.query('UPDATE users SET organisation = ? WHERE id = ?', [orgId, userId], function (error, results, fields) {
              if (error) {
                res.status(500)
                res.send('DB ERROR WHILE UPDATING USER WITH ORGANISATION | e: ' + error)
                throw error
              } else {
                res.status(200)
                res.json({ 'user_id': userId })
              }
            })
          }
        })
      }
    })
  },
  doLogin : function (req, res) {
    console.log(' req.body : ', req.body)
    let email = req.body.email
    let password = req.body.password
    console.log(' API doLogin email, password : ', email, password)
    DB.query('SELECT * FROM users where email = ? && password = ?', [email, password], function (error, results, fields) {
      if (error) {
        res.status(500)
        res.send('DB ERROR WHILE LOGGING IN | e : '+ error)
        throw error
      } else {
        console.log(' >>>>>>>>> LOGIN RESP :----> ', results)
        if(results.length) {
          res.status(200)
          res.json(results)
        } else {
          res.status(404)
          res.send('[]')
        }
      }
    })
  }
}