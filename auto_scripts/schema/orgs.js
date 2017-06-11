var mysql = require('mysql')
const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'helloworld',
  database: 'foo'
})

const CREATE_ORGANISATIONS_TABLE = 'CREATE TABLE organisations ( \
                            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, \
                            org_name VARCHAR(200) NOT NULL, \
                            org_website VARCHAR(200), \
                            org_desc VARCHAR(500), \
                            created_by VARCHAR(200) NOT NULL, \
                            created timestamp NOT NULL DEFAULT current_timestamp, \
                            edited timestamp NOT NULL DEFAULT current_timestamp \
                          );'

module.exports = {
  migrate : function () {
      DB.query('SHOW TABLES LIKE "organisations"', function (error, results, fields) {
      if (error) throw error
      if (!results.length) {
        DB.query(CREATE_ORGANISATIONS_TABLE, function (error, results, fields) {
          if (error) throw error
          console.log(' || organisations TABLE SUCCESSFULLY CREATED || ')
        })
      } else {
        console.log(' || organisations TABLE ALREADY EXISTS || ')
      }
    })    
  }
}