const Server = require("http-proxy/lib/http-proxy");

var express = require("express"),
    app = express();

var port = process.env.PORT || 8080;

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();
