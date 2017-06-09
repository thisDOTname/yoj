var mysql = require('mysql')
const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'helloworld',
  database: 'foo'
})

const createUsersTable = 'CREATE TABLE users ( \
                            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, \
                            first_name VARCHAR(100) NOT NULL, \
                            last_name VARCHAR(100) NOT NULL, \
                            email VARCHAR(200) NOT NULL, \
                            username VARCHAR(25) NOT NULL, \
                            password VARCHAR(100) NOT NULL, \
                            organisation VARCHAR(100), \
                            role VARCHAR(25), \
                            created timestamp NOT NULL DEFAULT current_timestamp, \
                            edited timestamp NOT NULL DEFAULT current_timestamp, \
                            last_login timestamp NOT NULL DEFAULT current_timestamp \
                          );'

module.exports = {
  migrate : function () {
      DB.connect()
      DB.query('SHOW TABLES LIKE "users"', function (error, results, fields) {
      if (error) throw error
      if (!results.length) {
        DB.query(createUsersTable, function (error, results, fields) {
          if (error) throw error
          console.log('DB RESPONSE :: ', typeof(results), results)
          console.log(' ##### CLOSING DB')
          DB.end()
        })
      } else {
        console.log(' || users TABLE ALREADY EXISTS || ')
      }
      // res.send(results)
    })    
  }
}