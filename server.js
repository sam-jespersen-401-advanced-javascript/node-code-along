const http = require('http');
const url = require('url');

function start(route, handle) {

  http.createServer((req, res) => {
    console.log('Request received');

    const pathname = url.parse(req.url).pathname;

    console.log(`Request for ${pathname} received`);

    route(handle, pathname, res, req);

  }).listen(8888);
  console.log('Server has started');
}

exports.start = start;



// let postData = '';
// req.setEncoding('utf8');

// req.addListener('data', postDataChunk => {
//     postData += postDataChunk;
//     console.log(`received POST data chunk ${postDataChunk}`);
// });

// req.addListener('end', () => {

//     route(handle, pathname, res, postData);

// })