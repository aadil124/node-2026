const http = require("http");

http
  .createServer((req, res) => {
    // console.log(req);

    if (req.url == "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(`
    <form action="/submit" method=post>
    <h1>Basic Form</h1>
    <input type="text" placeholder="Enter your name"/>
    <input type="text" placeholder="Enter your email"/>
    <button>Submit</button>
    </form>
    `);
    } else if (req.url == "/submit") {
      res.write(`<h1>Form Submitted Succucessfully</h1>`);
    }

    res.end();
  })
  .listen(4100);

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("./html/form.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.write(`internal surver Errror`);
        res.end();
        return;
      }

      if (req.url == "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
      } else if (req.url == "/submit") {
        res.write(`<h1>Form Submitted Succucessfully</h1>`);
      }

      res.end();
    });
  })
  .listen(4100);
