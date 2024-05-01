const { createServer } = require('http');

const port = 1245;
const host = 'localhost';

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});
app.listen(port, host, () => {
  process.stdout.write(`Server listening at -> http://${host}:${port}\n`);
});
module.exports = app;
