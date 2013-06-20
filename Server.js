var http = require("http");
var url = require("url");

function start(route, handleDict) {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;
        var data = "";
        console.log('Request received for ' + pathName + '!');
        request.addListener("data", function (dataChunk) { console.log(dataChunk);data += dataChunk; });
        request.addListener("end", function () { route(response, pathName, handleDict, data) });
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server started!');
}

exports.start = start;
