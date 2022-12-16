//console.log('sandeep singh');

// for (let index = 0; index<10; index++)
// {
//     console.log(index);
// }


// const http = require('node:http');

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//     res.write("hello world");
//   res.end();
// });

// server.listen(8000);


const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);
