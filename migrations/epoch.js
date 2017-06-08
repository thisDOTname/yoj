var mysql = require('mysql')
const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'helloworld',
  database: 'foo'
})

const createUsersTable = 'CREATE TABLE users ( \
                            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, \
                            first_name VARCHAR(100) NOT NULL \
                            last_name VARCHAR(100) NOT NULL \
                            email VARCHAR(200) NOT NULL \
                            username VARCHAR(25) NOT NULL \
                            password VARCHAR() 

module.exports = {
  migrate : function () {
      DB.connect()
      DB.query('SELECT * FROM bar', function (error, results, fields) {
      if (error) throw error
      console.log('DB RESPONSE :: ', typeof(results[0]), results)
      res.send(results)
    })
    console.log(' ##### CLOSING DB')
    DB.end()
  }
}