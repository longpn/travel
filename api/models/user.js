var mysql = require('mysql');

exports.login = function(user, connection, done) {
    var query = "select users.* from users where users.email = ? and users.password = ?";
    var table = [user.email, user.password];
    query = mysql.format(query, table);    
     console.log(connection);
    connection.query(query, done);
};


