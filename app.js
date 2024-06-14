const http = require("http");

const PORT = 3000;
const host = "127.0.0.1"
const operations = require('./utils/operations')

const server = http.createServer((req,res)=>{
  if(req.url === "/" && req.method === "GET"){
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>Home Page</h1><br/><p>Fibonacci: ${operations.fibonacci(10)}</p><br/><p>radar: ${operations.isPalindrome('radar')}</p>`)
  } else if(req.url === "/about" && req.method === "GET"){
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end('<h1>SAbouts us</h1>');
  } else if(req.url === "/contact" && req.method === "GET"){
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end('<h1>Contact information</h1>')
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end('<h1>Page not found</h1>')
  }
})

server.listen(PORT, host, () => {
  console.log(`Server is listening on ${PORT}`);
});