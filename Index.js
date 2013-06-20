var server = require('./Server');
var router = require('./Router');
var requestHandlers = require('./RequestHandlers');

var handleDict = {
    '/sophy': requestHandlers.handleSophy,
    '/bofie': requestHandlers.handleBofie
};

server.start(router.route, handleDict);