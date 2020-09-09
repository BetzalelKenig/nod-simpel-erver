let http = require("http");
let fs = require("fs");
let url = require("url");
var events = require("events");

var eventEmitter = new events.EventEmitter();

http
  .createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    fs.readFile(filename, (err, data) => {
      if (err) {
        fs.readFile("not-found.html", function (err, data) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
      } else {
        console.log(q.pathname.split(".")[1]);
        switch (q.pathname.split(".")[1]) {
          case "html":
            res.writeHead(200, { "Content-Type": "text/html" });
            break;
          case "css":
            eventEmitter.emit("add-css");
            break;
        }

        res.write(data);
        return res.end();

        // console.log(typeof cssHandler(res));
      }
    });

    eventEmitter.on("add-css", cssHandler(res));
  })
  .listen(8080);

function cssHandler(res) {
  return function () {
    return fs.readFile("style.css", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/css" });
      // res.write(data);
      // res.end();
      return data;
    });
  };
}
