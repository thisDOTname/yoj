var mysql = require('mysql')
const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'helloworld',
  database: 'foo'
})

const CREATE_USERS_TABLE = 'CREATE TABLE users ( \
                            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, \
                            first_name VARCHAR(100) NOT NULL, \
                            last_name VARCHAR(100) NOT NULL, \
                            email VARCHAR(200) NOT NULL, \
                            password VARCHAR(100) NOT NULL, \
                            organisation VARCHAR(100), \
                            role VARCHAR(25), \
                            created timestamp NOT NULL DEFAULT current_timestamp, \
                            edited timestamp NOT NULL DEFAULT current_timestamp, \
                            last_login timestamp NOT NULL DEFAULT current_timestamp \
                          );'



module.exports = {
  migrate : function () {
      DB.query('SHOW TABLES LIKE "users"', function (error, results, fields) {
      if (error) throw error
      if (!results.length) {
        DB.query(CREATE_USERS_TABLE, function (error, results, fields) {
          if (error) throw error
          console.log(' || users TABLE SUCCESSFULLY CREATED || ')
        })
      } else {
        console.log(' || users TABLE ALREADY EXISTS || ')
      }
    })    
  }
}