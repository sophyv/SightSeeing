var querystring = require("querystring");

function handleSophy(response, data) {
    console.log('Handle Sophy');
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write('<html><head></head><body><form action="/bofie" method="post"> <input name="text" type="text"/><input type="submit" value="Submit"/></form></body></html>');
    response.end();
}



function handleBofie(response, data) {
    console.log('"Handle Bofie"');
    response.writeHead(200, { "Content-Type": "text/plain" });
    console.log(data);
    response.write(querystring.parse(data).text);
    response.end();
}

exports.handleSophy = handleSophy;
exports.handleBofie = handleBofie;