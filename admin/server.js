var express 		= require("express");
var app 			= express();
var client 			= require("./client.js");
var config 			= require('./config');
var http 			= require('http').Server(app);
var PORT 			= config.port;

var multipart = require('connect-multiparty');

function REST() {
    var self = this;
    self.configureExpress();
};

REST.prototype.configureExpress = function() {
    var self = this;

    app.use(express.static(__dirname));
    app.use(express.static(__dirname + '/assets'));
    app.use(multipart({
        uploadDir: './uploads'
    }));
    var client_router = express.Router();
    app.use("/", client_router);
    var client_router_app = new client(client_router);

    self.startServer();
}

REST.prototype.startServer = function() {
    http.listen(PORT, function() {
        console.log("Rudledge_Admin ! I am alive at Port '" + PORT + "'.");
    });
}


new REST();
