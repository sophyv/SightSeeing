function route(response, pathName, handleDict, data) {
    if (typeof (handleDict[pathName]) === 'function'){
        handleDict[pathName](response, data);
    }
    else {
        noPathFound();
    }
}

function noPathFound() {
    console.log('No path found: 404');
}

exports.route = route;