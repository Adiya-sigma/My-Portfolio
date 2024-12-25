const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;

const server = http.createServer((req, res) => {
  console.log(`Server request: ${req.url}`);

  const createPath = (filePath) => path.resolve(__dirname, 'finalCode', filePath);

  let basePath = '';
  let contentType = 'text/html';

  switch (true) {
    case req.url === '/':
      basePath = createPath('base.html'); // Главная страница
      break;
    case req.url.endsWith('style.css'):
      basePath = createPath(req.url.slice(1)); // Путь к CSS
      contentType = 'text/css';
      break;
    case req.url.endsWith('script.js'):
      basePath = createPath(req.url.slice(1)); // Путь к JS
      contentType = 'text/javascript';
      break;
    case req.url.endsWith('.png') || req.url.endsWith('.jpg') || req.url.endsWith('.gif'):
      basePath = createPath(req.url.slice(1)); // Путь к изображениям
      contentType = `image/${path.extname(req.url).slice(1)}`;
      break;
    default:
      basePath = createPath('404.html'); // Страница 404
      contentType = 'text/html';
      break;
  }
  console.log(`Serving file from path: ${basePath}`);


  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.error(err);
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>Page not found</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`Server is listening on http://localhost:${PORT}`);
});
